import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/common/About";
import Navbar from "./components/Pages/Layout/navbar/Navbar";
import Question1 from "./components/Pages/Home/Question1";
import Category from "./components/Pages/Home/Category";
import CounterContextComponent from "./context/CounterContext";
import Reviews from './components/Pages/Home/Reviews.jsx';
import ObtainUserName from "./components/common/ObtainUserName.jsx";
import './App.css';
import UploadTrigger from "./components/UploaderTrigger.jsx";
import {  useRef } from "react";
import WebLoader from "./components/common/WebLoader";

function App() {
  const audioRef = useRef(null);

  

  return (
    <BrowserRouter>
      <CounterContextComponent>
      <WebLoader />

       

        {/* <UploadTrigger /> montar para cargar colecciones */}
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<About />} />
            <Route path="/Q1" element={<Question1 />} />
            <Route path="/category" element={<Category />} />
            <Route path="/rev" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </CounterContextComponent>
    </BrowserRouter>
  );
}

export default App;
