import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Select, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bucketService from "../../Appwrite/storage";
import dbService from "../../Appwrite/conf";
import { storePost } from "../../feature/postSlice";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateStore = async () => {
    await dbService.getPosts([]).then((posts) => {
      const allPosts = posts.documents;

      dispatch(storePost({ allPosts }));
    });
  };

  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await bucketService.uploadImage(data.image[0])
        : null;
      if (file) {
        await bucketService.deleteImage(post.featuredImage);
      }
      const dbfile = await dbService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbfile) {
        updateStore();
        navigate(`/post/${dbfile.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await bucketService.uploadImage(data.image[0])
        : null;
      if (file) {
        data.featuredImage = file.$id;

        const dbPost = await dbService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          updateStore();

          navigate(`/`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [slugTransform, watch, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4  bg-gray-200"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4  bg-gray-200"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          controls={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4 bg-gray-200"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={bucketService.getImagePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4 bg-gray-500"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
