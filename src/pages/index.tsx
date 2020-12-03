import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "../components/Container";
import MainComponent from "../containers/Main";
import Features from "../containers/Features";
import PlanContainer from "../containers/PlanContainer";

export interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box>
      <Container>
        <MainComponent />
        <Features />
        <PlanContainer />
      </Container>
    </Box>
  );
};

export default Index;
