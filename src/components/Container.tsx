import React from "react";
import { Box } from "@chakra-ui/react";

export interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box width="1140px" margin="auto">
      {children}
    </Box>
  );
};

export default Container;
