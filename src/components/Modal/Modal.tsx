import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import { AiOutlineCloseCircle } from "react-icons/ai";

import Overlay from "../Overlay";
import Button from "../Button";

import useOnClickOutside from "../../utils/useOnClickOutside";

import { Container, Content } from "./Modal.styles";

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  children?: React.ReactNode;
  disabled?: boolean;
  title?: string;
  width?: string;
  heigth?: string;
};

export default function Modal(props: Props) {
  const { isOpen, setIsOpen, children, disabled, title, width, heigth } = props;
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <AnimatePresence>
      {isOpen ? (
        <Overlay>
          <Container
            {...{
              ref,
              disabled,
              width,
              heigth,
            }}
          >
            <header>
              <h2>{title}</h2>

              <Button.Rounded onClick={() => setIsOpen(false)}>
                <AiOutlineCloseCircle size={24} />
              </Button.Rounded>
            </header>
            <Content>{children}</Content>
          </Container>
        </Overlay>
      ) : null}
    </AnimatePresence>
  );
}
