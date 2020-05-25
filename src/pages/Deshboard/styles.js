import styled from "styled-components";

export const Container = styled.div`
  /* background: linear-gradient(-90deg, red, yellow); */
  width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    h1 {
      color: #fff;
      font-weight: bold;
      font: 16px "Rototo", sans-serif;
    }

    button {
      padding: 0 5px 0 0;
      background-color: transparent;
      border: none;
      transform: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 0;
      background: none;
    }

    button:hover {
      opacity: 0.5;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong:hover {
    opacity: 0.5;
    color: red;
  }

  strong {
    display: block;
    color: ${(props) => (props.available ? "#999" : "#7159c1")};
    font-size: 20px;
    font-weight: normal;
    margin: 0 0 0 10px;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${(props) => (props.available ? "#999" : "#666")};
  }
`;
