import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../Button/Button";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleBackToHome = () => {
    navigate("/");
  };
  const onHover = () => {
    setHover(true);
  };
  const onHoverOver = () => {
    setHover(false);
  };
  return (
    <>
      <h1 className="headerName">About Mega</h1>
      <div className="hero-container">
        <img
          style={{ width: "900px", height: "500px" }}
          src="/reader.jpg"
          alt=""
        />
        <section>
          <p
            style={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              margin: "10 10 50px",
              fontFamily: "cursive",
            }}
          >
            Mega Publishing and Distribution P. L. C is a business company
            established in September 2007 pursuant to the 1952 (EC) commercial
            code of Ethiopia. It is the leading book publisher and distributor
            in Ethiopia book market for several years. The company is based in
            Addis Ababa and has 32 book stores throughout Ethiopia. Mega
            Publishing and Distribution P. L. C. operate with an established
            ethical business history and wide market out let all over Ethiopia.
            The company has strong reputation in publishing and distribution of
            various types of books and educational materials in Ethiopia.
          </p>
        </section>
       <section>
       <img
          className="imgHover"
          onMouseEnter={(e) => onHover(e)}
          onMouseLeave={(e) => onHoverOver(e)}
          style={{ width: "500px", height: "400px" }}
          src="/yelmezat.jpg"
          alt=""
        />
         {hover && (
          <p className="yelmzat">
            {" "}
            የልም እዣት በ 1980 በደራሲ ሀዲስ አለማየሁ ስለ ማህበራዊ ጉዳዮችና ስለ ጣሊያን ውርስ የሚዳስሰ ለንባብ
            የበቃ ልብ ወለድ ነው።መፀሐፉምፈ እጅግ ብዙ ማህበራዊ ህይቶችን ይዳስሳል የልጅ አስተዳደግ፡ እናትነት፡
            ፍቅር፡ ጀግንነት ...{" "}
          </p>
        )}
       </section>
      </div>
      <div className="viewBookList">
        {isAuthenticated ? (
          <Button onClick={handleBackToHome} value="<< View Book List >>" />
        ) : (
          <h5 className="bookListInfo">To view the book list you need to Login        
          </h5>
        )}
       
      </div>
    </>
  );
};

export default Home;
