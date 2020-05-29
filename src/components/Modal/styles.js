import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  padding: 2px 4px 3px;
  background: rgb(255, 255, 255, 0.8);
  border: 2px solid rgb(28, 168, 255, 0.6);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgb(0, 0, 0, 0.4);
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

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;
