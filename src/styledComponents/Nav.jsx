import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  height: 17vh;
  align-items: center;
  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
  }
  & a {
    text-decoration: none;
    color: black;
    text-decoration-color: white;
    &:hover {
      color: grey;
      text-decoration: underline;
      text-underline-offset: 1rem;
    }
  }
  & .logo {
    font-size: 2rem;
    &:hover {
      cursor: default;
    }
  }
`;

export default Nav;
