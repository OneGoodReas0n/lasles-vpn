import React from "react";
import { Button, Stack } from "@chakra-ui/react";

export interface RegisterComponentProps {}

const RegisterComponent: React.FC<RegisterComponentProps> = ({}) => {
  return (
    <Stack spacing="30p" direction="row">
      <Button variant="ghost" colorScheme="tomato" color="black">
        Sign in
      </Button>
      <Button
        variant="outline"
        borderColor="primary.init"
        color="primary.init"
        _hover={{ bg: "primary.init", color: "white" }}
      >
        Sign up
      </Button>
    </Stack>
  );
};

export default RegisterComponent;
