import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";
import Todays from "./components/Todays";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigator />
      <main>
        <Banner />
        <Todays />
      </main>
    </>
  );
}

export default App;
