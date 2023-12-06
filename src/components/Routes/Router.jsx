import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import Explore from "../../pages/Explore/Explore";
import Notifications from "../../pages/Notifications/Notifications";
import Messages from "../../pages/Messages/Messages";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import Lists from "../../pages/Lists/Lists";
import Profile from "../../pages/Profile/Profile";
import More from "../../pages/More/More";

import "./router.css";
import Register from "../../pages/Register/Register";
import Login from "../Login/Login";

const Router = () => {
  const isLoggedIn =
    localStorage.getItem("email")&&localStorage.getItem("password");
    console.log(isLoggedIn);
  return (
    <div className="router container">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          {isLoggedIn?(
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/profile" element={<Navigate to="/register" />} />
          )}
          <Route path="/more" element={<More />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;