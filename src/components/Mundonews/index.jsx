import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledTechs } from "./style";
import { Main } from "../../GlobalStyles";
import Loading from "../Loading";
import { motion } from "framer-motion";
import Aos from "aos";
import Bannermundo from "../BannerMundo";
import Headermundo from "../HeaderMundo";

const Mundonews = () => {
  const [news, setNews] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=world`)
      .then((response) => {
        setNews(response.data.data);
        setRemoveLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Headermundo />
      <Main>
        <Bannermundo />
        <StyledTechs>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ul>
              {!removeLoading ? (
                <Loading />
              ) : (
                news.map((elem) => (
                  <a href={elem.url} target="blank">
                    <li key={elem.id} data-aos="fade-in">
                      <img src={elem.imageUrl} alt={elem.title} />
                      <span>{elem.date}</span>
                      <h2>{elem.title}</h2>

                      <p>{elem.content}</p>
                    </li>
                  </a>
                ))
              )}
            </ul>
          </motion.div>
        </StyledTechs>
      </Main>
    </>
  );
};

export default Mundonews;
