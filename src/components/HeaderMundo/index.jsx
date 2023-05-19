import React from "react";
import { MainHeader } from "./style";
import { Link } from "react-router-dom";

const Headermundo = () => {
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
        <Link to={"/technews"}>
          <li>Technologia</li>
        </Link>
        <Link to={"/cienciasnews"}>
          <li>Ciência</li>
        </Link>
      </ul>
    </MainHeader>
  );
};

export default Headermundo;
