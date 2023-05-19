import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=4d70a58ef8464b3fb95fa4e0943c2ce1"
        );
        const allNews = response.data.articles.map((elem) => {
          return elem;
        });
        setNews(allNews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
};
