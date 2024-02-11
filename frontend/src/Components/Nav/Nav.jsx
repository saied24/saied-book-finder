import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Nav.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Signout from '../../Auth/Signout';
import { FaUserLarge } from 'react-icons/fa6';

const Nav = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <div className={styles.nav}>     
       <img style={{width:'200px', height:'70px'}}
         src='./key.jpg' alt=''/>  
      <ul className={styles.ul}>
         { isAuthenticated && (<Signout/> )} 
         { !isAuthenticated && (<Link className={styles.link} to='/login'>
            <li><FaUserLarge />Login</li></Link> 
             )}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/home' className={styles.link}>
      <li>Home</li>
      </Link>     
      <Link to='/about' className={styles.link}>
      <li>About</li>
      </Link>
      <Link to='/contact' className={styles.link}>
      <li>Contact</li>
      </Link>
      
     </ul>
    </div>
  )
}

export default Nav
