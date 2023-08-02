import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../components/Navbar";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const input =
    "block w-full mt-2 p-2 rounded-[10px] text-[1.8rem] bg-gray-200 font-bold focus-visible:outline-none";
  const label = ` text-[1.8rem] font-bold capitalize`;
  const group = "mb-4";
  const navigate = useNavigate()

  const onsubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", {name,email,password})
      .then((res) => {
        const token = res.data
        localStorage.setItem("cookie",JSON.stringify(token))
        toast.success("Account created successfully!!!")
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message)
      });
  };

  return (
    <>
    <Navbar />
    <main className="Container">
      <form onSubmit={onsubmit} className="w-[80%] mx-auto mt-[20%]">
        <div className={group}>
          <label htmlFor="name" className={label}>
            name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={input}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className={group}>
          <label htmlFor="email" className={label}>
            email*
          </label>
          <input
            type="text"
            name="email"
            className={input}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={group}>
          <label htmlFor="password" className={label}>
            password*
          </label>
          <input
            type="text"
            name="password"
            className={input}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="text-[1.8rem] !bg-blue-400 font-bold p-4 px-8 mt-4 uppercase rounded-md"
        >
          submit
        </button>
      </form>
    </main>
    </>
  );
}
