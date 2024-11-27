import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../store/auth";
import "./style/admin.css"


export default function AdminUsers() {
  const [user, setUser] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost/api/admin/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      setUser(data);
      console.log("user data:", data);
      // console.log(user.userData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //delete user 
  let deleteUser = async (id)=>{
    try { const response = await fetch(`http://localhost/api/admin/user/delete/${id}`, {
        method: "delete",
        headers: {
          Authorization: authorizationToken,
        },
    });
    if(response.ok){
      getAllUserData();
    }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (authorizationToken) {
      getAllUserData();
    }
  }, [authorizationToken]);

  return (
    <>
      <h1 className="container mb-5">user Data</h1>
      <table className="container mb-4">
        <thead>
          <tr className="tdhead">
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>admin</th>
            <th>update/edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(user.userData) &&
            user.userData.map((curUser, index) => {
              return (
                <tr className="container" key={index}>
                  <td   >
                    {curUser.username}
                  </td>
                  <td   >
                    {curUser.phone}
                  </td>
                  <td   >
                    {curUser.email}
                  </td>
                  <td   >
                    {curUser.isAdmin ? "true" : "false"}
                  </td>
                  <td   >
                  <Link to={`/admin/users/${curUser._id}/edit`}>edit</Link>
                  </td>
                  <td   >
                    <button onClick={()=> {deleteUser(curUser._id)}} className=" bg-primary rounded border-0 p-1">delete</button>
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
