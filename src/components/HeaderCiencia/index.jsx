import React from "react";
import { MainHeader } from "./style";
import { Link } from "react-router-dom";

const Headerciencia = () => {
  return (
    <MainHeader>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/technews"}>
          <li>Tecnologia</li>
        </Link>
        <Link to={"/politicanews"}>
          <li>Política</li>
        </Link>
        <Link to={"/esportenews"}>
          <li>Esportes</li>
        </Link>
        <Link to={"/entretenimentonews"}>
          <li>Entretenimento</li>
        </Link>
        <Link to={"/worldnews"}>
          <li>Mundo</li>
        </Link>
      </ul>
    </MainHeader>
  );
};

export default Headerciencia;
