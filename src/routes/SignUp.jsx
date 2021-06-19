import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import {
  SignForm,
  SignInUp,
  SignSocial,
  SocialBtn,
} from "../styles/screen/SignForm";

function SignUp() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SignInUp>
        <SignForm>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="이름" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
          <input type="submit" value="회원가입" />
        </SignForm>
        <SignSocial>
          <p>또는</p>
          <SocialBtn kakao>
            <i class="fas fa-comment"></i> 카카오 계정으로 회원가입
          </SocialBtn>
          <SocialBtn>
            <i class="fab fa-google"></i> 구글 계정으로 회원가입
          </SocialBtn>
        </SignSocial>
      </SignInUp>
    </>
  );
}
export default SignUp;
