import React, { useState } from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import SubscribeForm from "../components/SubscribeForm";

export interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Box px="70px" py="58px" boxShadow="2xl" borderRadius="10px">
      <Stack direction="row" justify="space-between" align="center">
        <Stack spacing="20px">
          <Heading
            w="55%"
            fontWeight="medium"
            fontFamily="Rubik"
            fontSize="35px"
            color="black"
            lineHeight="1.5"
          >
            Subscribe Now for Get Special Features!
          </Heading>
          <Text color="grey">Let's subscribe with us and find the fun.</Text>
        </Stack>
        <Button
          variant="solid"
          bg="primary.init"
          color="white"
          w="250px"
          h="60px"
          boxShadow="xl"
          _hover={{ bg: "primary.dark" }}
          onClick={() => setModalOpen(true)}
        >
          Subsribe Now
        </Button>
      </Stack>
      <SubscribeForm setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
    </Box>
  );
};

export default Subscribe;
