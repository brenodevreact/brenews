import { styled } from "styled-components";
import "../../variables.css";

export const MainHeader = styled.header`
  background-color: var(--brand);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  margin: 0 auto;

  ul {
    display: flex;
    gap: 18px;
  }

  li {
    font-size: var(--text1);
    color: var(--primary-color);
  }

  div {
    width: 92px;
    height: 92px;
  }
`;
