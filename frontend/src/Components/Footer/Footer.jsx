import { IoBook } from "react-icons/io5";

const Footer = () => {
  const currentYr = new Date().getFullYear();
  return (
    <footer>
      <div id="footer">
      <div className="moving-text-container">
       <div className="moving-text">
            <h4 > <IoBook/> &nbsp; &nbsp; Mulu, Wagaye, Saied, and Getachew collaborated to build this Book Finder Project,   class of June 12,2023. &copy; <strong>{currentYr}</strong></h4>
          </div>
          </div> 
      </div>
    </footer>
  );
};

export default Footer;