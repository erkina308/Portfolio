import styled from "styled-components";

const CvBtn = styled.button`
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  &.btn-color-2 {
    border: rgb(53, 53, 53) 0.1rem solid;
    background: none;
    &:hover {
      cursor: pointer;
      background: rgb(53, 53, 53);
      color: white;
      border: rgb(255, 255, 255) 0.1rem solid;
    }
  }
`;

export default CvBtn;
