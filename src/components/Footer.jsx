import { FooterStlye, FooterWrapper } from "../styles/components/Footerstyle";

export default function Footer() {
  return (
    <FooterStlye>
      <FooterWrapper>
        <div>
          <h5>genie's library</h5>
          <a href="https://github.com/313yang">
            고객센터 <i className="fas fa-angle-right"></i>
          </a>
          <a href="https://github.com/313yang">
            공지사항 <i className="fas fa-angle-right"></i>
          </a>
          <a href="https://github.com/313yang">
            개인정보처리방침 <i className="fas fa-angle-right"></i>
          </a>
          <a href="https://github.com/313yang">
            저작권/도서오류 신고 <i className="fas fa-angle-right"></i>
          </a>
          <h6>Copyright ⓒ 2021 Genie’s library All Rights Reserved</h6>
        </div>
        <div>
          <div>
            <i className="fab fa-youtube"></i>
          </div>
          <div>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </FooterWrapper>
    </FooterStlye>
  );
}
