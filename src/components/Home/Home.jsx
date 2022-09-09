import React, { useEffect, useState } from "react";
import UsersList from "../Users/UsersList";
import AddUser from "../Users/AddUser";
import EditUser from "../Users/EditUser";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Home = () => {


  return (
    <div>
      <div className="container mx-auto px-2 max-w-5xl pt-10    text-white h-screen">
        
        <Routes>
          <Route   path="/" element={<UsersList/>}            />
          <Route   path="/add-user" element={<AddUser/>}            />
          <Route   path="/edit-user/:id" element={<EditUser/>}            />
       </Routes>

    
      </div>
    </div>
  );
}

export default Home