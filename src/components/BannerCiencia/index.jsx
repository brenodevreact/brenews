import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledBanner } from "./style";

function BannerCiencia() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://inshorts.deta.dev/news?category=science`
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    if (data.length > 0) {
      getNextIndex();
    }
  }, [data]);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBanner = data[currentIndex];

  return (
    <StyledBanner>
      {currentBanner && (
        <>
          <h1>{currentBanner.title}</h1>
          <img src={currentBanner.imageUrl} alt="Banner" />
        </>
      )}
    </StyledBanner>
  );
}

export default BannerCiencia;
