import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export interface BtnProps extends ButtonProps {
  onClick(): void;
  variant: "default" | "outline";
  title: string;
}

const Btn: React.FC<BtnProps> = ({ onClick, variant, title }) => {
  return (
    <Button
      border={variant === "default" ? "" : "2px solid"}
      borderColor={variant === "default" ? "transparent" : "white"}
      borderRadius="30px"
      textTransform="uppercase"
      letterSpacing="0.5px"
      color="white"
      variant={variant === "default" ? "normal" : "outline"}
      bg={variant === "default" ? "primary.dark" : "transparent"}
      w="200px"
      h="50px"
      onClick={() => {
        onClick();
      }}
      _hover={{
        bg: variant === "default" ? "red.600" : "white",
        color: variant === "default" ? "white" : "primary.dark",
      }}
    >
      {title}
    </Button>
  );
};

export default Btn;
