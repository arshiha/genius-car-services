import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About.js";
import Home from "./Pages/Home/Home/Home.js";
import Login from "./Pages/Login/Login/Login.js";
import Register from "./Pages/Login/Register/Register.js";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail.js";
import Footer from "./Shared/Footer/Footer.js";
import Header from "./Shared/Header/Header.js";
import NotFound from "./Shared/NotFound/NotFound.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
