import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from './Pages/Login/Login';
import CreateAccount from "./Pages/CreateAccount/CreateAccount"
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
   <><Router>
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

export default App;
