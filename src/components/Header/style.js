import { styled } from "styled-components";
import "../../variables.css";

export const MainHeader = styled.header`
  background-color: var(--brand);
  width: 100%;

  padding: 12px;

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

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    width: 100%;
    max-width: 1200px;
  }
`;
