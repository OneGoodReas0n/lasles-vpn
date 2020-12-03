import React, { useState } from "react";
import { Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import PlanComponent, { PlanComponentProps } from "../components/PlanComponent";

export interface PlanContainerProps {}

const PlanContainer: React.FC<PlanContainerProps> = ({}) => {
  const [states, setStates] = useState<boolean[]>([false, false, true]);
  const plans = [
    {
      id: 1,
      imageSrc: "/images/plan_free.svg",
      price: 0,
      previleges: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      title: "Free Plan",
    },
    {
      id: 2,
      imageSrc: "/images/plan_standart.svg",
      price: 9,
      previleges: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      title: "Standart Plan",
    },
    {
      id: 3,
      imageSrc: "/images/plan_premium.svg",
      price: 12,
      previleges: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      title: "Premium Plan",
    },
  ];
  return (
    <Flex justifyContent="center">
      <Stack spacing="20px" align="center">
        <Heading
          fontFamily="Rubik"
          fontSize="35px"
          color="black"
          fontWeight="medium"
        >
          Choose Your Plan
        </Heading>
        <Box w="90%">
          <Text color="grey" textAlign="center" lineHeight="2">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </Text>
        </Box>
        <Box mt="60px">
          <Stack direction="row" spacing="50px">
            {plans.map((p) => (
              <PlanComponent
                id={p.id}
                imageSrc={p.imageSrc}
                previleges={p.previleges}
                price={p.price}
                title={p.title}
                key={p.id}
                states={states}
                setStates={setStates}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PlanContainer;
