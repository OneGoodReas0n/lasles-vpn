import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "../components/Container";
import MainComponent from "../containers/Main";
import Features from "../containers/Features";

export interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box>
      <Container>
        <MainComponent />
        <Features />
      </Container>
    </Box>
  );
};

export default Index;
