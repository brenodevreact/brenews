import axios from "axios";
import React, { useState, useEffect } from "react";

function Banner() {
  const [noticias, setNoticias] = useState([]);
  const [posicao, setPosicao] = useState(0);

  useEffect(() => {
    // Função para buscar as notícias da API
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(
          `https://inshorts.deta.dev/news?category=technology`
        );
        setNoticias(response.data);
      } catch (error) {
        console.error("Erro ao buscar as notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  useEffect(() => {
    // Atualiza a posição do array a cada atualização da página
    const timer = setInterval(() => {
      setPosicao((posicao + 1) % noticias.length);
    }, 5000); // Altere o tempo (em milissegundos) para controlar a troca de notícias

    return () => {
      clearInterval(timer);
    };
  }, [noticias, posicao]);

  if (noticias.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="banner">
      <h2>{noticias[posicao]}</h2>
    </div>
  );
}

export default Banner;
