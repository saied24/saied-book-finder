import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { IoBook } from "react-icons/io5";
import Spinner from "../../Spinner/Spinner";
import { FaUser } from "react-icons/fa6";


const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const { login} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (userInfo.email.trim() === '' || userInfo.password === '') {
      setError('Email and Password required')     
    }     
    try {
      const res = await axios.post("http://localhost:8080/api/users/login", userInfo);
      if (res.status === 200) {      
        login(res.data.token);
        setSuccessMsg('Login successfully');
        setTimeout(() => {    
          setLoading(false); 
          navigate("/"); 
        }, 2000);

        setError('')
        
      }     
    } catch (err) {
      setLoading(false);  
    }    
  };
  // Change Handler
  const handleChange = (e) => {
    setUserInfo({ ...userInfo,[e.target.name]: e.target.value});
  };
  
  return (
    <>
    <h2 className="title"><IoBook/> &nbsp; &nbsp; 
    Welcome to MSWG Book Finder </h2>
   <div className="background">
     <div className="form-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <h1><FaUser />Login</h1>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            value={userInfo.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter Email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            value={userInfo.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control "
          />
        </div> 
        {loading ? (
              <Spinner /> // Render spinner if loading is true
            ) : (
              <>
         {successMsg && <h5 style={{ color: 'green' }}>{successMsg}</h5>}
         {error && <h5 style={{ color: 'red' }}>{error}</h5>}
        <button 
        className="btn btn-success w-100 rounded-5 text-decoration-none">           
          Login
        </button>
        </>
            )}
        <div className="signup-link">
          <p id="account">Don't have an account? </p>
          <Link className="link" to="/signup">
            SignUp
          </Link>
        </div>
      </form>      
    </div>
   </div>
   </>
  );
};

export default Login;
