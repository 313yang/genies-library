import { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
                <h1>genie's library</h1>
              </div>
              <div>
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
            <form>
              <input type="text" placeholder="Search books" />
              <button>
                <i className="fas fa-search"></i>
              </button>
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
              <h1>genie's library</h1>
            </div>
            <HeaderForm>
              <input type="text" placeholder="Search books" />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </HeaderForm>
            <div>
              <Button>회원가입</Button>
              <Button black>로그인</Button>
            </div>
          </HeaderCenter>
        </HeaderPC>
      )}
    </>
  );
}
export default Header;
