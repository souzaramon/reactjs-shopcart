import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;

    list-style: none;

    li:nth-child(odd) {
      background: #cccccc26;
    }

    li {
      width: 100%;
      height: 55px;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 100%;
        border-radius: 50%;
        margin-right: 10px;
      }

      > div {
        flex: 1;
        padding-left: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > * {
          margin-right: 10px;
        }
      }
    }
  }

  footer {
    margin-top: auto;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
