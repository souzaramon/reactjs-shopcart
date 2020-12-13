import styled from "styled-components";

export const Empty = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: opacity ease 0.3s;
  user-select: none;

  &:hover {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: normal;
    pointer-events: none;
  }
`;

export const Outlined = styled(Empty)`
  padding: 7px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Rounded = styled(Empty)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  min-height: 20px;
  min-width: 20px;
  padding: 5px;
  border-radius: 50%;
`;

export const RoundedWithBadge = styled(Rounded)<{
  n?: string | number;
}>`
  position: relative;

  &:after {
    transition: transform ease 0.3s;
    transform: scale(${({ n }) => (n ? 1 : 0)});

    content: "${({ n = "" }) => (Number(n) > 99 ? 99 : n)}";
    position: absolute;
    right: -40%;
    top: -30%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 14px;
    height: 14px;
    padding: 5px;
    border-radius: 50%;
    background-color: red;

    font-size: 10px;
    font-weight: bold;
  }
`;

const Button = {
  Empty,
  Rounded,
  RoundedWithBadge,
  Outlined,
};

export default Button;
