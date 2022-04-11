import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About.js";
import Home from "./Pages/Home/Home/Home.js";
import Footer from "./Shared/Footer/Footer.js";
import Header from "./Shared/Header/Header.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
