import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})<{
  color?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 905;
  background-color: ${({ theme, color }) => (color ? color : theme.overlay)};
`;
