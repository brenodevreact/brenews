import { styled } from "styled-components";
import "../../variables.css";

export const MainHeader = styled.header`
  background-color: var(--brand);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;

  padding: 12px;

  ul {
    display: flex;
    gap: 28px;

    a {
      text-decoration: none;

      color: var(--primary-color);
    }
  }
`;
