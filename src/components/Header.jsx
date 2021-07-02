import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {
  HeaderPC,
  HeaderMobile,
  HeaderCenter,
  Button,
  HeaderForm,
} from "../styles/components/HeaderStlye";
import { NavMobile } from "../styles/components/NavStyle";

function Header() {
  const isPc = useMediaQuery({
    query: "(min-width:781px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:780px)" });
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  const scrollToBest = () => {
    window.scrollTo({ top: 1400, behavior: "smooth" });
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
          </HeaderMobile>
          {isOpen ? (
            <NavMobile>
              <ul>
                <Link to="/" onClick={scrollToBest}>
                  <li>BestSeller</li>
                </Link>
                <Link to="/">
                  <li>Category</li>
                </Link>
                <Link to="/search">
                  <li>My library</li>
                </Link>
                <Link to="/search">
                  <li>Search</li>
                </Link>
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
            <HeaderForm></HeaderForm>
            <div>
              <Link to="/search">
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </Link>
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
