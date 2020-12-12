import styled from "styled-components";

const Base = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: opacity ease 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const Button = {
  Empty: Base,
  Outlined: styled(Base)`
    padding: 7px;
    border: 1px solid ${({ theme }) => theme?.colors?.primary || "#000"};
  `,
};

export default Button;
