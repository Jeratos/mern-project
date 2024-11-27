// import { set } from "mongoose";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [token, setToken] = useState(localStorage.getItem("Token"));
  let [user, setUser] = useState("");
  let [isLoading,setIsLoading]= useState(true);
  let [services, setServices]=useState("")

  let authorizationToken = `Bearer ${token}`
  const storeTokenInLS = (serverToken) => {

    setToken(serverToken);
    return localStorage.setItem("Token", serverToken);
  };

  //ackling the log out functionality
  let isLogin = !!token;

  const LogoutUser = () => {
    setToken("");

    return localStorage.removeItem("Token");
  };

  //jwt authentication

  async function userAuthrntication() {
    try {
      setIsLoading(true);
      let response = await fetch("http://localhost/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        let data = await response.json();
        // console.log(data.userData);
        setUser(data.userData);
        setIsLoading(false)
      }else{
        setIsLoading(false)

      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function getService() {
    try { 
      let response = await fetch("http://localhost/api/data/service", {
        method: "GET",
      });
      
      if (response.ok){
        const  data= await response.json()
        setServices( services=data.msg);        
        // console.log("get service",services);
        
      }
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    getService();
    userAuthrntication();
  }, []);
  
  return (
    <AuthContext.Provider value={{ isLogin, storeTokenInLS, LogoutUser, user,services,authorizationToken,isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  let authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("error");
  }
  
  return authContextValue;
};
