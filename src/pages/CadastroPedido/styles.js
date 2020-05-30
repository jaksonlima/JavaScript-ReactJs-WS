import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;

    h1 {
      color: #fff;
      font-weight: bold;
      font: 30px "Rototo", sans-serif;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgb(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgb(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transform: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #2ed961;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transform: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#2ed961")};
    }
  }
`;
