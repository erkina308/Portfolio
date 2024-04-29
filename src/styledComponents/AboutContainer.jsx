import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5rem;
  margin: 0 5rem;
  padding-bottom: 10rem;
  & .p1 {
    font-weight: 600;
  }
  & .p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  & h1 {
    font-size: 3rem;
    text-align: center;
  }
  @media screen and (max-width: 870px) {
    h1 {
      font-size: 2rem;
    }
    .p1 {
      font-size: 0.9rem;
    }
  }
`;

export default AboutContainer;
