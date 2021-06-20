import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { bookSearch } from "../api";
import {
  HeaderPC,
  HeaderMobile,
  HeaderCenter,
  Button,
  HeaderForm,
} from "../styles/components/HeaderStlye";
import { NavMobile } from "../styles/components/NavStyle";
import Search from "../routes/Search";

function Header() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    console.log(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    handleSubmit();
  };
  const isPc = useMediaQuery({
    query: "(min-width:781px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:780px)" });
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  return (
    <>
      {isMobile && (
        <>
          <HeaderMobile>
            <div>
              <div>
                {isOpen ? (
                  <i onClick={toggleNav} className="fas fa-times"></i>
                ) : (
                  <i onClick={toggleNav} className="fas fa-stream"></i>
                )}
              </div>
              <div>
                <Link to="/">
                  <h1>genie's library</h1>
                </Link>
              </div>
              <div>
                <Link to="/signin">
                  <i className="fas fa-user-circle"></i>
                </Link>
              </div>
            </div>
            <form method="get" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                name="keyword"
                value={value}
                onChange={handleChange}
              />
              <Link
                to={{
                  pathname: "/search",
                  state: value,
                }}
              >
                <button type="submit" value={value}>
                  <i className="fas fa-search"></i>
                </button>
              </Link>
            </form>
          </HeaderMobile>
          {isOpen ? (
            <NavMobile>
              <ul>
                <li>Home</li>
                <li>BestSeller</li>
                <li>Category</li>
                <li>My library</li>
              </ul>
            </NavMobile>
          ) : (
            <NavMobile style={{ transform: "translateY(20px)" }}></NavMobile>
          )}
        </>
      )}
      {isPc && (
        <HeaderPC>
          <HeaderCenter>
            <div>
              <Link to="/">
                <h1>genie's library</h1>
              </Link>
            </div>
            <HeaderForm>
              <input type="text" placeholder="Search books" />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </HeaderForm>
            <div>
              <Link to="/signup">
                <Button>회원가입</Button>
              </Link>
              <Link to="/signin">
                <Button black>로그인</Button>
              </Link>
            </div>
          </HeaderCenter>
        </HeaderPC>
      )}
    </>
  );
}
export default Header;
