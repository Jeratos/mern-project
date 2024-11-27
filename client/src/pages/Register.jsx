import React, { useState } from "react";
import "./style/register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  let [detail, setDetail] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
let [show, setShow]= useState(false);

  let navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  function inputChange(e) {
    let { name, value } = e.target;

    setDetail({
      ...detail,
      [name]: value,
    });
  }

  async function handleform(e) {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost/api/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });
      // console.log(response);
      let res_data = await response.json();
      
      if (response.ok) {
        toast.success(
          `hi ${detail.username} your registration is submited successfully...`
        );
        
        storeTokenInLS(res_data.token);
        
        // console.log(res_data);
        
        setDetail({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        
        navigate("/login");
      }
      else{

        // console.log( res_data.extraDetails)

        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message)
      }
    } catch (error) {
      console.log("register" + error);
    }
  }
  function handleVisibility(){
    if(show){
      return <VisibilityOffIcon/>
    }
    else{

      return <VisibilityIcon />
    }
  }
  return (
    <>
      <main className="container-reg">
        <div className="reg">
          <img
            className="img-reg"
            src="images/register-new.png"
            alt="image"
          />
        </div>
        <div className="reg form-reg">
          <h1>Registration form:</h1>
          <form onSubmit={handleform}>
            <label htmlFor="username">User Name</label>
            <input
            className="in"
              type="text"
              name="username"
              onChange={inputChange}
              value={detail.username}
              required
            />

            <label htmlFor="email">Email</label>
            <input
            className="in"
              type="email"
              name="email"
              onChange={inputChange}
              value={detail.email}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
            className="in"
              type="text"
              name="phone"
              onChange={inputChange}
              value={detail.phone}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="pass-div" >
            <input
            className="pass "
              type={show? "text":"password"}
              name="password"
              onChange={inputChange}
              value={detail.password}
              required
              />
              <p onClick={()=>{setShow(!show)}}>
               {handleVisibility()}

              </p>

            </div>
            <button className="subbtn" value="submit">
              submit
            </button>
          
            
          </form>
        </div>
      </main>
    </>
  );
}
