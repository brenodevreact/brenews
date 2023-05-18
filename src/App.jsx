import { Outlet } from "react-router-dom";
import ResetCSS, { Main } from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ResetCSS />

      <Outlet />
    </div>
  );
}

export default App;
