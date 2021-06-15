import {
  HeaderPC,
  HeaderCenter,
  Button,
} from "../styles/components/HeaderStlye";

function Header() {
  return (
    <HeaderPC>
      <HeaderCenter>
        <div>
          <h1>genie's library</h1>
        </div>
        <form>
          <input type="text" placeholder="Search books" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div>
          <Button>회원가입</Button>
          <Button black>로그인</Button>
        </div>
      </HeaderCenter>
    </HeaderPC>
  );
}
export default Header;
