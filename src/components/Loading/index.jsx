import React from "react";
import Lottie from "lottie-react";
import loading from "../../lotties/9844-loading-40-paperplane.json";
import { styled } from "styled-components";

const StyledLoading = styled.div`
  width: 50vw;
  height: 50vh;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <Lottie animationData={loading} />
    </StyledLoading>
  );
};

export default Loading;
