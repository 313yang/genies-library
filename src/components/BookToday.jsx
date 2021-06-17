import { MainTitle } from "../styles/components/MainTitle";
import {
  Today,
  TodayUser,
  TodayTag,
  TodayWrapper,
} from "../styles/screen/Today";

function BookToday() {
  return (
    <>
      <MainTitle>
        <h2>오늘의 책</h2>
        <i className="fas fa-chevron-right"></i>
      </MainTitle>
      <Today>
        <TodayWrapper>
          <img src="./img/todaysbook.jpg" alt="bookcover" />
          <div>
            <h4>비전공자를 위한 이해할 수 있는 IT지식</h4>
            <h6>최원영 (지은이)</h6>
          </div>
        </TodayWrapper>
        <TodayTag>
          <TodayWrapper>
            <p>
              <i className="far fa-check-square"></i> 오늘은 월드 와이드 웹(www)
              탄생 32주년 <i className="fas fa-angle-right"></i>
            </p>
            <p>
              <i className="far fa-check-square"></i> 누구나 쉽게 배울 수 있는
              IT 기초지식 <i className="fas fa-angle-right"></i>
            </p>
            <p>
              <i className="far fa-check-square"></i> 완독할 확률 35% | 완독
              예상시간 2시간27분 <i className="fas fa-angle-right"></i>
            </p>{" "}
          </TodayWrapper>
          <TodayWrapper>
            <TodayUser>
              <div>
                <img src="./img/avatar.jpg" alt="avatar" />
                <div>
                  <h4>313님의 추천평</h4>
                  <h6>나는야 몽상가</h6>
                </div>
              </div>
              <p>
                매일 누르는 'www' 세 글자 안에 어떤 비밀이 숨어 있을까요?
                어렵지만 꼭 알아야 하는 IT 지식! 비전공자도 충분히 이해할 수
                있어요.
              </p>
            </TodayUser>
          </TodayWrapper>
        </TodayTag>
      </Today>
    </>
  );
}
export default BookToday;
