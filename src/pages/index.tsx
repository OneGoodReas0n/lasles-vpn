import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "../components/Container";
import MainComponent from "../containers/MainComponent";

export interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box>
      <Container>
        <MainComponent />
      </Container>
    </Box>
  );
};

export default Index;
