const config = {
  fbApiKey: String(import.meta.env.VITE_FB_API_KEY),
  fbAuthDomain: String(import.meta.env.VITE_FB_AUTH_DOMAIN),
  fbProjectId: String(import.meta.env.VITE_FB_PROJECT_ID),
  fbStorageBucket: String(import.meta.env.VITE_FB_STORAGE_BUCKET),
  fbMessagingSenderId: String(import.meta.env.VITE_FB_MESSAGING_SENTER_ID),
  fbAppId: String(import.meta.env.VITE_FB_APP_ID),
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
