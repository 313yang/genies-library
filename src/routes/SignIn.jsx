import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { Link } from "react-router-dom";

import {
  SignForm,
  SignInUp,
  SignSocial,
  SocialBtn,
  SignLink,
} from "../styles/screen/SignForm";

function SignIn() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SignInUp>
        <SignForm>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="비밀번호" />
          <input type="submit" value="로그인" />
        </SignForm>
        <SignSocial>
          <p>또는</p>
          <SocialBtn kakao>
            <i class="fas fa-comment"></i> 카카오 계정으로 로그인
          </SocialBtn>
          <SocialBtn>
            <i class="fab fa-google"></i> 구글 계정으로 로그인
          </SocialBtn>
        </SignSocial>
        <SignLink>
          <p>
            아직 계정이 없으신가요? <Link to="/signup">회원가입 &rarr;</Link>
          </p>
        </SignLink>
      </SignInUp>
    </>
  );
}
export default SignIn;
