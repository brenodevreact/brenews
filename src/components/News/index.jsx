import React, { useEffect, useState } from "react";
import { Main } from "../../GlobalStyles";
import axios from "axios";
import { StyledUl } from "./style";

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
      <StyledUl></StyledUl>
    </Main>
  );
};

export default News;
