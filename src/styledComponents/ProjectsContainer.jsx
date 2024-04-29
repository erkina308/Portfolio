import styled from "styled-components";

const ProjectsContainer = styled.section`
  text-align: center;
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
`;
export default ProjectsContainer;