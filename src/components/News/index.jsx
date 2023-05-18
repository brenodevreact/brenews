import React from "react";
import { Main } from "../../GlobalStyles";
import { DivLottie, DivNews, StyledUl } from "./style";
import Lottie from "lottie-react";
import LottieNews from "../../lotties/109397-news-error.json";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <Main>
      <StyledUl>
        <DivLottie>
          <Lottie animationData={LottieNews} />
        </DivLottie>

        <DivNews>
          <h2>Olá, leitor(a)!</h2>
          <p>Sobre o que você quer ler hoje?</p>

          <ul>
            <Link to={"/technews"}>
              <li>Tecnologia</li>
            </Link>
            <Link to={"/esportenews"}>
              <li>Esportes</li>
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
        </DivNews>
      </StyledUl>
    </Main>
  );
};

export default News;
