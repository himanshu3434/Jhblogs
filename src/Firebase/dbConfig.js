import config from "../config/config";
import { auth, db } from "./fb_Config";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
export class DBService {
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await setDoc(doc(db, "blogs", slug), {
        title: title,
        content: content,
        featuredImage: featuredImage,
        status: status,
        userId: userId,
      });
    } catch (error) {
      console.log("FB error || {Create Post} : ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await updateDoc(doc(db, "blogs", slug), {
        title: title,
        content: content,
        featuredImage: featuredImage,
        status: status,
      });
    } catch (error) {
      console.log("FB error || {Update Post} : ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await deleteDoc(doc(db, "blogs", slug));

      return true;
    } catch (error) {
      console.log("FB error || {delete Post} : ", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      const docRef = doc(db, "blogs", slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        // console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.log("FB error || {Get Post} : ", error);
      return false;
    }
  }
  async getPosts() {
    try {
      const blogRef = collection(db, "blogs");

      const q = query(blogRef, where("status", "==", "active"));
      return q;
    } catch (error) {
      console.log("FB error || {Get Posts} : ", error);
      return false;
    }
  }
}

const dbService = new DBService();

export default dbService;
