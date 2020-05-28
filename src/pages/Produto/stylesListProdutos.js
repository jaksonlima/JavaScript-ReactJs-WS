import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
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
      background: transparent;
      margin: 0 0 5px 16px;
      transition: border-color 0.2s;
    }
    button:hover {
      border-color: #999;
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    list-style: none;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      .button2 {
        right: 70px;
      }

      button {
        background: transparent;
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        transition: opacity 0.2s;
      }

      button:hover {
        opacity: 0.5;
      }

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;
