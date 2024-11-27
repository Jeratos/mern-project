
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

import "./style/admin.css";

export default function adminContacts() {
  let [contact, setContact] = useState([]);
  const { authorizationToken } = useAuth();

  async function getContects() {
    try {
      const response = await fetch("http://localhost/api/admin/contact", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      setContact(data);

      console.log("user data:", data);
      // console.log(contact)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function deleteContact(id) {
    try {
      const response = await fetch(`http://localhost/api/admin/contact/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        getContects()
        toast.success("deleted successfully")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContects();
  }, [authorizationToken]);

  return (
    <div className="container">
      <h1 className="mb-5 ">Contacts:</h1>
      <div className="row "> 
        {Array.isArray(contact.contactData) &&
          contact.contactData.map((curUser, index) => {
            return (
              <div className="col-md-4 col-xxl-3 col-sm-6 mb-4" key={index}>
                <div className="card  h-100">
                  <div className="card-header">
                    <div className="card-name"><span className="contact-card"> name: </span> {curUser.username}</div>
                    <div className="card-email"><span className="contact-card">email: </span>{curUser.email}</div>
                    <div className="card-phone"><span className="contact-card">phone: </span>{curUser.phone}</div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title"><span className="contact-card">subject: </span>{curUser.subject}</h4>
                    <p className="card-text msg"><span className="contact-card">msg: </span>{curUser.message}</p>
                    <button onClick={()=>{deleteContact(curUser._id)} } className="btn btn-primary px-4 font-weight-bold">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
