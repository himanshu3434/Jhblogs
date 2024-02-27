# Vite + React + Appwrite

Website Link- [Jhblogs](https://jhblogs.vercel.app/)

## Table of Content 
 - Tech Stack 
 - Website Screen Shots
 - How to Run Locally



## Tech Stack
### FrontEnd: 
  - Vite-React-Library - Used for Creating the Frontend of the Website
  - React-Hook-Form    - For Easy Handling Of UserInput
  - TinyMce            - For RTE(Real Time Text Editor )
  - Tailwind           - Used to Design the website UI
  - Redux-Toolkit      - Used for the  State Management in Frontend (Mainly for Auth and Post )

### BackEnd:
   - AppWrite -Used Appwrite for backend as a service


## Screen Shots:
  ### Home Page: 
  ![image](https://github.com/himanshu3434/Jhblogs/assets/82664890/f6a9afd1-09bb-474a-858e-d3251e499125)


## How To Run Locally:

 ### Steps:

 1. Clone The Repo
 2. Run `npm i`
 3. Create .env file
 4. Create this variables in env file
     ```
      VITE_APPWRITE_URL=""
      VITE_APPWRITE_PROJECT_ID="" 
      VITE_APPWRITE_DATABASE_ID=""
      VITE_APPWRITE_COLLECTION_ID=""
      VITE_APPWRITE_BUCKET_ID=""
      VITE_TINYMCE_ID=""
     ```
 5. Now Create a [Appwrite](https://appwrite.io/) Account
 6. Then Create A  Web Project in Appwrite
 7. Now  Create a DataBase ,Bucket,Collection and paste the required  field in the env file and also create account on tinymce and get the apikey from there and paste in the tinymce id env var 
 8. Schema For the App
    
     ![image](https://github.com/himanshu3434/Jhblogs/assets/82664890/e793c0ae-5143-4ab5-ba69-b411ff037e93)
 9. Add this attributes in the collection of appwrite (from appwrite Console )
 10. Also Add The status Attribute in the Index of Collection
 11. ` Important ` - Go to bucket and Collection Setting and Add Permission Role for User (Give All Four CRUD)
 12.  Also in tinymce add  localhost to be approved Domain
 13.  All Set To Run the website Locally 

       # HAPPY CODING 😀
    

      

