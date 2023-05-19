import React from "react";
import { MainHeader } from "./style";
import { Link } from "react-router-dom";

const HeaderSports = () => {
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
        <Link to={"/entretenimentonews"}>
          <li>Entretenimento</li>
        </Link>
        <Link to={"/worldnews"}>
          <li>Mundo</li>
        </Link>
        <Link to={"/cienciasnews"}>
          <li>Ciência</li>
        </Link>
      </ul>
    </MainHeader>
  );
};

export default HeaderSports;
