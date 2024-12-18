import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import { ToastContainer } from 'react-toastify';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

let root = createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <StrictMode>
      <App />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition: Bounce
       bodyClassName="toastBody"
      />
    </StrictMode>
  </AuthProvider>
);
