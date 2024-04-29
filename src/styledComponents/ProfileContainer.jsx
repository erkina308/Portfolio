import styled from "styled-components";

const ProfileContainer = styled.div`
  align-self: center;
  text-align: center;
  & p {
    font-weight: 600;
  }
  & .p1 {
    text-align: center;
  }
  & .p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  & h1 {
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
    }
    .p2 {
      font-size: 1.5rem;
    }
  }
`;
export default ProfileContainer;
