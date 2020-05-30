import styled from "styled-components";

export const Button = styled.button`
  margin: 5px 0 0 !important;
  height: 44px !important;
  background: ${(props) => (props.color ? props.color : "##d1f0ee")} !important;
  font-weight: bold !important;
  color: #fff !important;
  border: 0 !important;
  border-radius: 4px !important;
  font-size: 16px !important;
  transform: filter 0.2s !important;

  &:hover {
    filter: brightness(0.9) !important;
  }
`;
