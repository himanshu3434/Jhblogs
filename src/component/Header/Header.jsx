import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="w-full sm:px-[20px] lg:px-[180px] shadow-lg bg-[#2F3136]">
      <Container>
        <nav className=" flex justify-between items-center text-white">
          <div className=" pl-5 ">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className=" flex justify-between items-center    mr-2 ">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="mr-1 sm:mr-5 hover:text-[#89b4f6] rounded-lg p-3 "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className=" hover:text-[#89b4f6] rounded-lg p-3 ">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
