import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./screens/navBar";

import AboutUsScreen from "./screens/AboutUsScreen";
import AddBlogScreen from "./screens/AddBlogScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Service from "./screens/Service";
import ContactUs from "./screens/ContactUs";
import Footer from "./screens/Footer";
import Posts from "./screens/Posts";
import Post from "./screens/Post";
import Help from "./screens/Help";


const Routing = () => {

   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/add-blog" element={<AddBlogScreen />} />
            <Route path="/help" element={<Help />} />
            <Route path="/service" element={<Service/>} />
            <Route
               path="/login"
               element={
                  <PreventMultipleLogin>
                     <LoginScreen />
                  </PreventMultipleLogin>
               }
            />
             <Route path="/post/:postId" element={<Post/>} />
            <Route
               path="/post"
               element={
                  <ProtectAdminRoute>
                     <Posts />
                  </ProtectAdminRoute>
               }
            />

            <Route path="/contact" element={<ContactUs />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};


const ProtectAdminRoute = ({ children }) => {
     const user = JSON.parse(localStorage.getItem("user"));
   if (!user) {
      return <Navigate to="/" replace />;
   } else if (!user.isAdmin) {
      return <Navigate to="/" replace />;
   }
   return children;
};

const PreventMultipleLogin = ({ children }) => {
     const user = JSON.parse(localStorage.getItem("user"));
   if (user) {
      return <Navigate to="/post" replace />;
   } else {
      return children;
   }
};

export default Routing;
