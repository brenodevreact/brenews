import ResetCSS, { Main } from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ResetCSS />
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
