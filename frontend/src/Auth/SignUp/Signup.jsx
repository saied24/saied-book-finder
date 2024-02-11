import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import  '../Login/login.css';
import Spinner from "../../Spinner/Spinner";
import { FaUser } from 'react-icons/fa6';


const Signup = () => {
  const navigate = useNavigate();
const [userData, setUserData] = useState({
  fName:'',
  lName:'',
  email:'',
  password:''
})
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setUserData({...userData, [e.target.name] : e.target.value})
}
  const submitHandler =  async (e) =>{
    e.preventDefault();    
    setLoading(true)
   try {
     await axios.post('http://localhost:8080/api/users/signup', userData)    
    setTimeout(() => {    
      setLoading(false); 
      navigate("/login"); 
      setUserData({
        fName:'',  lName:'', email:'', password:''
      })
    }, 3000)
   } catch(error) {
        console.error('Error signing up:', error);
        setError('You are not able to signup try again!')
        setLoading(false);
    };   
  }
  
  
    return (
    <div className='background'>
          <div className="form-container">          
          <form onSubmit={submitHandler} >
            {error ? <h5 style={{color:'red'}}>Please enter all informations</h5> : null}
            <div className="form-group">
            <h2 className="mb-3 align-items-center"><FaUser />SignUp</h2>
              <label htmlFor="ftName">
                <strong>First Name</strong>
              </label>
              <input             
                type="text"
                onChange={handleChange}
                value={userData.fName}
                placeholder="Enter First Name"
                name="fName"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lName">
                <strong>Last Name</strong>
              </label>
              <input             
                type="text"
                onChange={handleChange}
                value={userData.lName}
                placeholder="Enter LastName"
                name="lName"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input             
                type="email"
                onChange={handleChange}
                value={userData.email}
                placeholder="Enter Email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input 
                type="password"
                onChange={handleChange}
                value={userData.password}
                placeholder="Enter Password"
                name="password"          
                className="form-control"
              />
            </div>
            {loading ? (
              <Spinner /> // Render spinner if loading is true
            ) : (null)}
            <button 
            className="btn btn-success w-100 rounded-5 text-decoration-none">
              Sgnup
            </button>
             <div className="signup-link">
              <p id='account'>You already an account ?  <Link to='/login' >Login</Link></p>
             </div>
          </form>
        </div>
    </div>
    )
  }
  
  export default Signup
  