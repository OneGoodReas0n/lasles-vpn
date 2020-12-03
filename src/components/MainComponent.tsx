import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import IntroComponent from "./IntroComponent";
import StatisticComponent from "./StatisticComponent";

export interface MainComponentProps {}

const MainComponent: React.FC<MainComponentProps> = ({}) => {
  return (
    <Box>
      <Header />
      <IntroComponent mt="115px" />
      <StatisticComponent mt="100px" />
    </Box>
  );
};

export default MainComponent;
