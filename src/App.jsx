import { useState } from "react";
import "./App.css";
import config from "./config/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logout } from "./feature/authSlice";
import { Footer, Header } from "./component/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div>
        <div>
          <Header />
          <main>
            Todo
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
