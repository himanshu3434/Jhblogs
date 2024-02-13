import config from "../config/config";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
    console.log(this.client, "client");
    console.log(this.account, "account ");
  }
  async createAcount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("AppWrite error || {createAcount} : ", error);
      return false;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("AppWrite error || {login} : ", error);
      return false;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // console.log("AppWrite error || {get current user} : ", error);
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("AppWrite error || {logout} : ", error);
      return false;
    }
  }
}
//creating object
const authService = new AuthService();

//exporting object directly
export default authService;
