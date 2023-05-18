import { styled } from "styled-components";

export const StyledUl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  h2 {
    font-size: var(--title2);
    color: var(--brand);
  }

  p {
    font-size: var(--title1);
    color: var(--brand);
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
    font-size: var(--text1);
    color: var(--brand);
    margin-top: 20px;
  }

  li {
    background-color: var(--primary-color);
    box-shadow: 0px 0px 1px 1px var(--brand);
    padding: 12px;
    border-radius: 4px;
    width: 140px;
    text-align: center;
    cursor: pointer;

    transition: ease-in-out 0.6s;
    &:hover {
      background-color: var(--brand);
      color: var(--primary-color);
    }
  }
`;

export const DivNews = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 50%;
`;

export const DivLottie = styled.div`
  width: 50%;
  margin-right: 15px;
`;
