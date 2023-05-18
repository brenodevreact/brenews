import React, { useEffect, useState } from "react";
import { Main } from "../../GlobalStyles";
import axios from "axios";
import { DivLottie, DivNews, StyledUl } from "./style";
import Lottie from "lottie-react";
import LottieNews from "../../lotties/109397-news-error.json";

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
            <li>Tecnologia</li>
            <li>Esportes</li>
            <li>Política</li>
            <li>Entretenimento</li>
            <li>Mundo</li>
            <li>Ciência</li>
          </ul>
        </DivNews>
      </StyledUl>
    </Main>
  );
};

export default News;
