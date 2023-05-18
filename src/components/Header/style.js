import { styled } from "styled-components";
import "../../variables.css";

export const MainHeader = styled.header`
  background-color: var(--brand);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;

  h2 {
    font-size: var(--title3);
    color: var(--primary-color);
  }
`;
