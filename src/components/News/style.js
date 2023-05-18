import { styled } from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 35px;
  gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 50%;
    max-width: 337px;
    height: 225px;

    gap: 8px;
    padding: 8px;

    text-align: center;

    background-color: var(--brand);
    color: var(--primary-color);

    border-radius: 6px;

    h2 {
      font-size: var(--title3);
    }

    div {
      display: flex;
      align-items: flex-end;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
