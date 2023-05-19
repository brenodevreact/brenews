import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledTechs } from "./style";
import { Main } from "../../GlobalStyles";
import HeaderTech from "../HeaderTech";
import Banner from "../BannerTech";

const TechNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=technology`)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <HeaderTech />
      <Main>
        <Banner />
        <StyledTechs>
          <ul>
            {news.map((elem) => (
              <a href={elem.url} target="blank">
                <li key={elem.id}>
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
