// import React from 'react'

import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export default function adminLayout() {

  let {user}= useAuth();
  let {isLoading}= useAuth();
  //  console.log("admin detaile",user)

  if(isLoading){
    return <h1>loading...</h1>
  }
  
  if(!user.isAdmin){
       return <Navigate to="/"/>
  }

  return (
    <>
      <header className="d-inline-flex ">
        <div className=" p-5" style={{ fontSize: "16px" }}>
          <nav>
            <ul className="d-inline-flex flex-row">
              <li>
                <NavLink to="/admin/users">
                  <FaUser /> users
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <IoChatbox /> contacts
                </NavLink>{" "}
              </li>
              <li>
                <NavLink>
                  <IoIosListBox /> services
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/admin">
                  <FaHome /> home
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
