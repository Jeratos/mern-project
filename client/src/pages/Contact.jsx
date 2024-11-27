import React, { useState } from "react";
import "./style/contact.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  let [contactDetail, setContactDetail] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  let [userData, setUserData] = useState(true);
  let { user } = useAuth();

  if (userData && user) {
    setContactDetail({
      username: user.username,
      email: user.email,
      phone: user.phone,
      subject: "",
      message: "",
    });
    setUserData(false);
  }

  function handleInputChange(e) {
    let { name, value } = e.target;

    setContactDetail({
      ...contactDetail,
      [name]: value,
    });
  }

  async function handleform(e) {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactDetail),
      });

      if (response.ok) {
        
        setContactDetail({
          username: user.username,
          email: user.email,
          phone: user.phone,
          subject: "",
          message: "",
        });
        toast.success("you message is sent successfully...");
      }
    
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1 className="contact-head">Contact Us: </h1>

      <main className="container-reg">
        <div className="reg">
          <img
            className="img-reg"
            src="../../public/images/support.png"
            alt="image"
          />
        </div>
        <div className="reg-ct form-reg" style={{ marginTop: "1rem" }}>
          <form onSubmit={handleform}>
            <label htmlFor="username">User Name</label>
            <input
              className="in"
              type="text"
              name="username"
              onChange={handleInputChange}
              value={contactDetail.username}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              className="in"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={contactDetail.email}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              className="in"
              type="text"
              name="phone"
              onChange={handleInputChange}
              value={contactDetail.phone}
              required
            />

            <label htmlFor="subject">subject</label>
            <input
              className="in"
              type="text"
              name="subject"
              onChange={handleInputChange}
              value={contactDetail.subject}
              required
            />

            <label htmlFor="subject">Message</label>
            <textarea
              name="message"
              id="txt"
              onChange={handleInputChange}
              value={contactDetail.message}
            ></textarea>

            <button className="subbtn" value="submit">
              submit
            </button>
          </form>
        </div>
      </main>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06224910513!2d-74.30932630953386!3d40.69701929031582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1726061997272!5m2!1sen!2sin"
          width="1380"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
