import { Outlet } from "react-router-dom";
import ResetCSS from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <ResetCSS />

      <Outlet />
    </div>
  );
}

export default App;
