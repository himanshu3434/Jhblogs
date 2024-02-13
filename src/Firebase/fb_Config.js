// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import config from "../config/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.fbApiKey,
  authDomain: config.fbAuthDomain,
  projectId: config.fbProjectId,
  storageBucket: config.fbStorageBucket,
  messagingSenderId: config.fbMessagingSenderId,
  appId: config.fbAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
