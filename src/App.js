import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";
import BookToday from "./components/BookToday";
import BooksNew from "./components/BooksNew";

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
      </main>
    </>
  );
}

export default App;
