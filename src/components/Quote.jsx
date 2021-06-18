import { Booksection } from "../styles/components/BookContent";
import { MainTitle } from "../styles/components/MainTitle";
import { QuoteStyle } from "../styles/components/QuoteStyle";

export default function Quote() {
  return (
    <Booksection>
      <MainTitle>
        <h2>오늘의 한 문장</h2>
        <i className="fas fa-chevron-right"></i>
      </MainTitle>
      <QuoteStyle>
        <div>
          <span>
            <i className="fas fa-quote-left"></i>
          </span>
          <p>
            이 세상의 책이란, 그것을 다 합쳤을 때는, 사람들이 우주를 두고 하는
            말처럼, 무한한 것이다.
          </p>
          <span className="last">
            <i className="fas fa-quote-right"></i>
          </span>
          <h6>주제 사라마구 | 눈먼 자들의 도시 </h6>
        </div>
      </QuoteStyle>
    </Booksection>
  );
}
