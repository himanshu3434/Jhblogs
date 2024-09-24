import { useState } from "react";
import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logout } from "./feature/authSlice";
import { Footer, Header } from "./component/index";
import { Outlet } from "react-router-dom";
import dbService from "./Appwrite/conf";
import { storePost } from "./feature/postSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });

    dbService
      .getPosts([])
      .then((posts) => {
        const allPosts = posts.documents;

        dispatch(storePost({ allPosts }));
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="   bg-[#202225] font-sans">
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>Loading</div>
    </>
  );
}

export default App;
