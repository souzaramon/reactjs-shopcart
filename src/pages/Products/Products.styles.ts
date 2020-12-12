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
        delay: 0.6,
      },
    },
  },
})`
  display: flex;
  justify-content: center;

  section {
    width: fit-content;

    display: grid;
    grid-template-columns: repeat(3, 220px);

    grid-gap: 55px;
    padding: 55px;

    @media only screen and (max-width: 850px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media only screen and (max-width: 600px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  }
`;
