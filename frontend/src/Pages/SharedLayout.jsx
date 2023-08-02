import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function SharedLayout() {
  const [userinfo] = useState(
    JSON.parse(localStorage.getItem("cookie"))
      ? JSON.parse(localStorage.getItem("cookie"))
      : ""
  );

  // useEffect(()=>{

  // })
  return (
    <>
      <Navbar />
   {userinfo ? <Outlet /> : <Navigate to='/login' replace />}
      {/* <Outlet /> */}
    </>
  );
}

export default SharedLayout;
