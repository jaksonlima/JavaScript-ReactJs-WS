import styled from "styled-components";

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: ${(props) => (props.color ? props.color : "##d1f0ee")};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transform: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
