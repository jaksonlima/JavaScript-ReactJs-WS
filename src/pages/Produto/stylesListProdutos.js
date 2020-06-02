import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const ContainerGrid = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;

  main {
    width: 20%;
    background: #fff;
    padding: 14px;
    border-radius: 8px;
    position: relative;
    margin: 0 0 0 10px;

    strong {
      display: block;
      margin-bottom: 12px;
      color: #41414d;
    }

    p + strong {
      margin-top: 15px;
    }

    p {
      color: #737380;
      line-height: 1px;
      font-size: 16px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #fff;
    font-weight: bold;
    font: 30px "Rototo", sans-serif;
  }

  img {
    height: 64px;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    color: white;
    background: transparent;
    margin: 0 0 5px 16px;
    transition: border-color 0.2s;
  }
  button:hover {
    border-color: #999;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 29vh);
  grid-gap: 12px;

  li {
    background: #fff;
    padding: 14px;
    border-radius: 8px;
    position: relative;

    .button2 {
      right: 50px;
    }

    button {
      background: transparent;
      position: absolute;
      right: 10px;
      top: 10px;
      border: 0;
      transition: opacity 0.2s;
    }

    button:hover {
      opacity: 0.5;
    }

    strong {
      display: block;
      margin-bottom: 12px;
      color: #41414d;
    }

    p + strong {
      margin-top: 14px;
    }

    p {
      color: #737380;
      line-height: 10px;
      font-size: 15px;
    }
  }
`;
