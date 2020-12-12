import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 220px;
  height: 350px;
  box-shadow: 0px 13px 21px -5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  img {
    height: 220px;
  }

  footer {
    display: flex;
    flex-direction: column;

    padding: 20px;

    h3 {
      font-weight: normal;
      color: #393c45;
    }

    h4 {
      color: #34c29e;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }
`;
