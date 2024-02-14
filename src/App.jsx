import { useState } from "react";
import "./App.css";
import config from "./config/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Firebase/auth";
import { login, logout } from "./feature/authSlice";

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
          <main>TODO</main>
        </div>
      </div>
    </>
  ) : null;
}

export default App;
