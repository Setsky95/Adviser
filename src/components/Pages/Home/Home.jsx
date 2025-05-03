import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CounterContext } from "../../../context/CounterContext";
import { useContext, useEffect, useState } from "react"; // Importa useState
import ObtainUserName from "../../common/ObtainUserName";
import Category from "./Category";
import Name from "../../common/Name";
import "./Home.css";

///////////RETORNA//////////

const Home = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  console.log(userName);
  return !userName ? (
    <ObtainUserName setUserName={setUserName} />
  ) : (
    <>
    <div className="homeContainer">
  <div className="left">
    <Name />
  </div>
  <div className="right">
    <Category />
  </div>
</div>

    </>
  );
};

export default Home;
