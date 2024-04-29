import styled from "styled-components";

const MainContainer = styled.section`
  margin: 0 10rem;
  box-sizing: border-box;
  padding-top: 4vh;
  height: 96vh;
  min-height: fit-content;

  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
  @media screen and (max-width: 400px) {
    margin: 0 4rem;
  }
`;

export default MainContainer;
