import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import IntroComponent from "../components/IntroComponent";
import StatisticComponent from "../components/StatisticComponent";

export interface MainComponentProps {}

const MainComponent: React.FC<MainComponentProps> = ({}) => {
  const [formState, setForm] = useState<"login" | "register">("login");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Header
        formState={formState}
        isModalOpen={isModalOpen}
        setForm={setForm}
        setModalOpen={setModalOpen}
      />
      <IntroComponent
        mt="115px"
        formState={formState}
        isModalOpen={isModalOpen}
        setForm={setForm}
        setModalOpen={setModalOpen}
      />
      <StatisticComponent mt="100px" />
    </Box>
  );
};

export default MainComponent;
