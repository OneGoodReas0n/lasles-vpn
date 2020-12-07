import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";
import RegisterComponent from "./RegisterComponent";
import { RegistrationFormProps } from "./RegistrationForm";

export interface HeaderProps extends RegistrationFormProps {}

const Header: React.FC<HeaderProps> = ({
  formState,
  isModalOpen,
  setForm,
  setModalOpen,
}) => {
  return (
    <Flex pt="44px" justifyContent="space-between" alignItems="center">
      <Logo />
      <Nav />
      <RegisterComponent
        setModalOpen={setModalOpen}
        formState={formState}
        isModalOpen={isModalOpen}
        setForm={setForm}
      />
    </Flex>
  );
};

export default Header;
