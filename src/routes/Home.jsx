import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Main } from "../GlobalStyles";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=4d70a58ef8464b3fb95fa4e0943c2ce1"
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(news);

  return (
    <>
      <Header />
      <Main>
        <h2>oies</h2>
        <ul>
          {news.map((elem) => (
            <li key={elem.publishedAt}>
              <h2>{elem.title}</h2>
              <p>{elem.author}</p>
              <p>{elem.source.name}</p>
              <a href={elem.url} target="_blank">
                Ler a notícia
              </a>
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
};

export default Home;
