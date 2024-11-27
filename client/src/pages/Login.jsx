import React, { useState } from "react";
import "./style/register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = "http://localhost/api/auth/login";

export default function Login() {
  let [detail, setDetail] = useState({
    email: "",
    password: "",
  });
let [show, setShow]= useState(false);


  const {storeTokenInLS} = useAuth();

  let navigate = useNavigate();

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
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });

      let res_data = await response.json();
      
      if (response.ok) {
        //  console.log(await response.json())


        storeTokenInLS(res_data.token);
        toast.success("login successful...");

        setDetail({
          email: "",
          password: "",
        });

        navigate("/");
      } else {
        // alert("invailid credential");
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message)
      }
    } catch (error) {
      console.log(error);
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
            src="../../public/images/login.png"
            alt="image"
          />
        </div>
        <div className="reg form-reg">
          <h1>Login form:</h1>
          <form onSubmit={handleform}>
            <label htmlFor="email">Email</label>
            <input
            className="in"
              type="email"
              name="email"
              onChange={inputChange}
              value={detail.email}
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
