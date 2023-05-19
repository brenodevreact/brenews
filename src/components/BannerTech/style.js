import { styled } from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 60px;
  position: relative;
  align-items: center;
  gap: 10px;

  h1 {
    color: var(--brand);
    font-size: var(--title1);
  }

  img {
    width: 100%;
    max-width: 1200px;
    height: 448px;
    filter: brightness(60%);
  }
`;
