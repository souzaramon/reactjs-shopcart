import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  },
})``;
