import React from "react";
import { MainHeader } from "./style";
import Logo from "../../lotties/news.json";
import Lottie from "lottie-react";

const Header = () => {
  return (
    <MainHeader>
      <div>
        <Lottie animationData={Logo} />
      </div>

      <ul>
        <li>fodase</li>
        <li>fodase</li>
        <li>fodase</li>
        <li>fodase</li>
      </ul>
    </MainHeader>
  );
};

export default Header;
