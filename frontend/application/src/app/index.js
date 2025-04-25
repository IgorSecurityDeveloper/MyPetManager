
'use client'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext/page";
// import { AuthProvider } from "./context/AuthContext";
import Login from './Login/page';
import CreateAccount from "./CreateAccount/page"
import Dashboard from "./Dashboard/page";
import PrivateRoute from "./PrivateRoute/page";

export default function index() {
  return (
    <>
    <Router>
    <AuthProvider>
     
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/CreateAccount" element={<CreateAccount />} /> 
         <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />  
       </Routes>
       </AuthProvider>
     </Router>
  </>
  );
}