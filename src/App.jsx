import Home from "./components/Home";
import ServiceCards from "./components/ServiceCards";
import Footer from "./components/Footer";
import Sqlinfo from "./components/sqlinfo";
import BeyondBasics from "./components/BeyondBasics";
import Fineartpage from "./components/Fineartpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Main />}></Route>
           <Route path="/sql" element={<Sqlinfo />}></Route>
           <Route path="/beyondbasics" element={<BeyondBasics />}></Route>
           <Route path="/fineart" element={<Fineartpage />}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <Main />
        <Sqlinfo />
        <BeyondBasics /> */}
        

    </div>
  );
}

export default App;
