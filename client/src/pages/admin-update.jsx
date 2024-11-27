import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
export default function AdminUpdate() {
let [data,setData]= useState({
    username:"",
    email:"",
    phone:"",
    isAdmin:false,
})

let {authorizationToken} = useAuth();
const params = useParams();

async function getSingleUserData(){
   try {
          let response= await fetch(`http://localhost/api/admin/user/${params.id}`,{
            method: "get",
            headers: {
              Authorization: authorizationToken,
            },
          }) 

          let userdata = await response.json()
          
          
          
          setData(userdata.userdata);
        } catch (error) {
            console.log(error)
        }
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            let response= await fetch(`http://localhost/api/admin/user/update/${params.id}`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
    ) 
    if(response.ok){
        
        toast.success("updated successfully")
    }else{
        toast.error("not updated")
        console.log(response);
    }
    
    
} catch (error) {
    console.log(error)
}
}


function handleInputChange(e) {
    let { name, value } = e.target;
    
    setData({
        ...data,
        [name]: value,
    });
  }

useEffect(()=>{
    getSingleUserData()
    
    
},[])

  return (
    <>
      <h1 className="container">User Update:</h1>

      <div className="reg-ct form-reg container" style={{ marginTop: "1rem" }}>
        <form onSubmit={handleSubmit} >
          <label htmlFor="username">User Name</label>
          <input
            className="in"
            type="text"
            name="username"
              onChange={handleInputChange}
              value={data.username}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="in"
            type="email"
            name="email"
              onChange={handleInputChange}
              value={data.email}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            className="in"
            type="text"
            name="phone"
              onChange={handleInputChange}
              value={data.phone}
            required
          />

          <label htmlFor="isAdmin">is Admin</label>
          <input
            className="in"
            type="text"
            name="isAdmin"
              onChange={handleInputChange}
              value={data.isAdmin}
            required
          />

          <button className="subbtn bg-primary text-white " value="submit">
            update
          </button>
        </form>
      </div>
    </>
  );
}
