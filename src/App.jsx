import AllRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/constants/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
