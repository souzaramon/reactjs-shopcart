import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 220px;
  height: 350px;
  box-shadow: 0px 13px 21px -5px ${({ theme }) => theme.colors.shadows};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  transition: all ease 0.3s;
  transition-property: box-shadow, background;

  img {
    height: 220px;
    object-fit: cover;
    border-radius: 0 0 0 15px;
  }

  footer {
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 20px;
    padding-bottom: 10px;

    h3 {
      color: ${({ theme }) => theme.colors.text};
      font-weight: normal;
    }

    h4 {
      color: #34c29e;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    > div {
      width: 100%;
      height: 100%;
      display: flex;

      justify-content: flex-end;
      align-items: flex-end;

      > span {
        font-size: 12px;
        color: #9d9d9d;
        flex: 1;
      }

      & > * {
        margin-left: 10px;
      }
    }
  }
`;
