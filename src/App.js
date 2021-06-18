import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";
import BookToday from "./components/BookToday";
import BooksNew from "./components/New";
import BooksBestseller from "./components/Bestseller";
import { BooksWeekly1, BooksWeekly2 } from "./components/Weekly";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigator />
      <Banner />
      <main>
        <BookToday />
        <BooksNew />
        <BooksBestseller />
        <BooksWeekly1 />
        <BooksWeekly2 />
      </main>
      <Footer />
    </>
  );
}

export default App;
