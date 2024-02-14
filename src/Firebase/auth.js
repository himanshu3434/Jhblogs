import config from "../config/config";
import { auth } from "./fb_Config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export class AuthService {
  async createAcount({ email, password, name }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return await updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      console.log("FB error || {createAcount} : ", error);
      return false;
    }
  }

  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("FB error || {login} : ", error);
      return false;
    }
  }
  async getCurrentUser() {
    try {
      return auth.currentUser;
    } catch (error) {
      // console.log("AppWrite error || {get current user} : ", error);
      throw error;
    }
  }
  async logout() {
    try {
      return await signOut(auth);
    } catch (error) {
      console.log("FB error || {logout} : ", error);
      return false;
    }
  }
}
//creating object
const authService = new AuthService();

//exporting object directly
export default authService;
