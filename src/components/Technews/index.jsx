import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../Carrossel";
import { StyledTechs } from "./style";
import { Main } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import Header from "../Header";
import HeaderTech from "../HeaderTech";

const TechNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=technology`)
      .then((response) => {
        setNews(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(news);

  return (
    <>
      <HeaderTech />
      <Main>
        <StyledTechs>
          <ul>
            {news.map((elem) => (
              <a href={elem.url} target="blank">
                <li>
                  <img src={elem.imageUrl} alt={elem.title} />
                  <span>{elem.date}</span>
                  <h2>{elem.title}</h2>

                  <p>{elem.content}</p>
                </li>
              </a>
            ))}
          </ul>
        </StyledTechs>
      </Main>
    </>
  );
};

export default TechNews;
