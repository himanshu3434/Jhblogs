import config from "../config/config";
import { Client, Storage, ID } from "appwrite";

export class BucketService {
  client = new Client();
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }
  async uploadImage(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite error || {Upload Image} : ", error);
      return false;
    }
  }
  async deleteImage(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("AppWrite error || {Delte Image} : ", error);
      return false;
    }
  }
  getImagePreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("AppWrite error || {Get Image Preview} : ", error);
      return false;
    }
  }
  async getImage(fileId) {
    try {
      return await this.bucket.getFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("AppWrite error || {Get Image} : ", error);
      return false;
    }
  }
}

const bucketService = new BucketService();
export default bucketService;
