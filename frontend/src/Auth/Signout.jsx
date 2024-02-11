import { useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import './SignUp/sign.css'


const Signout = () => {
  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    signout();
    navigate('/login');
  }

  return (
    <div >
        <Link className='btnLogout'
       onClick={logoutHandler}><RiLogoutCircleRLine />Logout</Link>
    </div>
  )
}

export default Signout
