import React, { useEffect, useState } from "react";
import { Main } from "../../GlobalStyles";
import axios from "axios";
import { DivLottie, DivNews, StyledUl } from "./style";
import Lottie from "lottie-react";
import LottieNews from "../../lotties/109397-news-error.json";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=entertainment`)
      .then((response) => {
        // Manipule a resposta aqui
        setNews(response.data.data);
      })
      .catch((error) => {
        // Manipule o erro aqui
        console.error(error);
      });
  }, []);
  console.log(news);

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
