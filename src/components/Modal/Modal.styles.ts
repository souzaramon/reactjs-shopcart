import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: { scale: 0.3 },
  animate: { scale: 1 },
  exit: { scale: 0.3 },
})<{
  disabled?: boolean;
  width?: string;
  height?: string;
}>`
  z-index: 906;

  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;

  width: ${({ width = "500px" }) => width};
  max-width: 95%;
  height: ${({ height = "500px" }) => height};
  max-height: 95%;

  padding-left: 18px;
  padding-right: 18px;
  margin: auto;

  transition: all ease 400ms;
  transition-property: color, opacity, background;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.background};

  header {
    width: 100%;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 5px;

    h2 {
      font-size: 24px;
      margin: 0;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  ${({ disabled }) => disabled && `pointer-events: none; opacity: 0.3`}
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
`;
