import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigator />
      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
