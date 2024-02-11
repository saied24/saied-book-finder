
import Home from "./Components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import EditBook from "./Components/EditBook/EditBook";
import AddBook from "./Components/AddBook/AddBook";
import Login from './Auth/Login/Login'
import Signup from "./Auth/SignUp/Signup";
import Signout from "./Auth/Signout";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
console.log('APP',isAuthenticated);
  return (
    <div className="App">
      
        <Nav />      
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/edit/:id" element={<EditBook/>}></Route>
          <Route path="/create" element={<AddBook/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/logout" element={<Signout />}></Route>
        </Routes>  
        <Footer/>        
    </div>
  );
}

export default App;
