import styled from "styled-components";

const ContactBtn = styled.button`
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  &.btn-color-1 {
    border: rgb(53, 53, 53) 0.1rem solid;
    background: rgb(53, 53, 53);
    color: white;
    &:hover {
      cursor: pointer;
      background: rgb(0, 0, 0);
    }
  }
`;

export default ContactBtn;
