import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Banner from "../components/Banner";
import BookToday from "../components/BookToday";
import BooksNew from "../components/New";
import BooksBestseller from "../components/Bestseller";
import { BooksWeekly1, BooksWeekly2 } from "../components/Weekly";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Genres from "../components/Genres";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigator />
      <main>
        <Banner />
        <BookToday />
        <BooksNew />
        <BooksBestseller />
        <Genres />
        <BooksWeekly1 />
        <BooksWeekly2 />
        <Quote />
      </main>
      <Footer />
    </>
  );
}

export default Home;
