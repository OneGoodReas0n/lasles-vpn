import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import RegistrationForm, { RegistrationFormProps } from "./RegistrationForm";

export interface RegisterComponentProps extends RegistrationFormProps {}

const RegisterComponent: React.FC<RegisterComponentProps> = ({
  formState,
  isModalOpen,
  setForm,
  setModalOpen,
}) => {
  return (
    <>
      <Stack spacing="30p" direction="row">
        <Button
          variant="outline"
          borderColor="primary.init"
          color="primary.init"
          _hover={{ bg: "primary.init", color: "white" }}
          onClick={() => setModalOpen(true)}
        >
          Sign in
        </Button>
      </Stack>
      <RegistrationForm
        formState={formState}
        setForm={setForm}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default RegisterComponent;
