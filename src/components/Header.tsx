import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";
import RegisterComponent from "./RegisterComponent";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex pt="44px" justifyContent="space-between" alignItems="center">
      <Logo />
      <Nav />
      <RegisterComponent />
    </Flex>
  );
};

export default Header;
