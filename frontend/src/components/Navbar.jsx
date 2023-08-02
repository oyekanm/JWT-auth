import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbar() {
  const session =  JSON.parse(localStorage.getItem("cookie"))
  ? JSON.parse(localStorage.getItem("cookie"))
  : ""
  const inActive = `text-[1.8rem] text-slate-900 font-bold mr-4 sm:mr-8`;
  const active = `${inActive} font-extrabold`;

  const navigate = useNavigate()

  const logout = () => {
    axios
      .post("/api/users/logout")
      .then((res) => {
        // console.log(res);
        localStorage.removeItem("cookie")
        toast.success(res.data.message)
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        toast.error(err)
      });
  };

  if (!session) {
    return (
      <nav className="bg-white shadow-lg p-16 py-10 ">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? `${active} ` : inActive)}
        >
          Login
        </NavLink>
        ;
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Register
        </NavLink>
        ;
      </nav>
    );
  }

  return (
    <nav className=" relative z-[10000] h-[100px] ">
      <ul className="fixed flex items-center justify-between w-full bg-white shadow-lg p-16 py-10">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${active} ` : inActive)}
          >
            Home
          </NavLink>
       
        </div>
        <span 
        onClick={logout}
        >
          <p className="text-slate-900 cursor-pointer text-[2rem] font-bold">Logout </p>
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
