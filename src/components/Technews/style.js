import { styled } from "styled-components";

export const StyledTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    li {
      display: flex;
      flex-direction: column;

      gap: 8px;
      width: 360px;
      height: 320px;
      color: var(--brand);
      font-size: var(--text1);
      margin-top: 55px;

      :hover {
        color: red;
      }

      h2 {
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: justify;
        max-height: 30%;
        font-size: var(--title3);
      }

      span {
        font-size: var(--text3);
      }

      p {
        font-size: 12px;
        text-align: justify;
      }

      img {
        width: 100%;
        height: 147px;
        border-radius: 4px;
      }
    }

    a:visited {
      color: var(--brand);
    }

    a {
      color: var(--brand);
      text-decoration: none;
    }
  }
`;
