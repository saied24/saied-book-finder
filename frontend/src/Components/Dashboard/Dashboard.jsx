import { useContext } from "react";
import BookList from "../BookList/BookList";
import { AuthContext } from "../../Context/AuthContext";
import About from "../About/About";

const Dashboard = () => {
  const { isAuthenticated} = useContext(AuthContext)
  return (
    <div>
     { isAuthenticated  &&  <BookList/>}
     { !isAuthenticated && <About/>}
     
    </div>
  );
};

export default Dashboard;
