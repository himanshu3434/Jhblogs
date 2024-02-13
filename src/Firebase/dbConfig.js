import config from "../config/config";
import { auth, db } from "./fb_Config";
export class DBService {
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("AppWrite error || {Create Post} : ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppWrite error || {Update Post} : ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("AppWrite error || {delete Post} : ", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppWrite error || {Get Post} : ", error);
      return false;
    }
  }
  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        query
      );
    } catch (error) {
      console.log("AppWrite error || {Get Posts} : ", error);
      return false;
    }
  }
}

const dbService = new DBService();

export default dbService;
