import styled from "styled-components";

export const Button = styled.button`
  background-color: #bdbdbd;
  font-size: 1em;
  padding: 4px 12px;
  color: black;
  transition: all 0.3s ease;
  cursor: ${(props) => props.cursor || ""};
  box-shadow: 3px 3px 4px 2px rgb(152, 152, 152);
  border-color: #ddd;
  &:hover {
    background-color: #ccc;
  }

  &:active {
    background-color: #7c7c7c;
    border-color: none;
  }
`;
