import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Container from "../components/Container";
import MainComponent from "../containers/Main";
import Features from "../containers/Features";
import PlanContainer from "../containers/PlanContainer";
import Network from "../containers/Network";
import Comments from "../containers/Comments";
import Subscribe from "../containers/Subscribe";
import Footer from "../containers/Footer";

export interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box>
      <Container>
        <MainComponent />
        <Features />
        <PlanContainer />
        <Network />
      </Container>
      <Comments />
      <Container>
        <Subscribe />
        <Footer />
      </Container>
    </Box>
  );
};

export default Index;
