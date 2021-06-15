import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Navigater from "./components/Navigater";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigater />
      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
