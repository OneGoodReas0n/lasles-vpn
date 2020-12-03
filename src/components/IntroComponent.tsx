import {
  BoxProps,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export interface IntroComponentProps extends BoxProps {}

const IntroComponent: React.FC<IntroComponentProps> = ({ ...options }) => {
  return (
    <Stack direction="row" {...options} align="center">
      <Stack spacing="50px">
        <Stack spacing="20px">
          <Heading fontWeight="500" fontSize="50px" color="black">
            Want anything to be easy with{" "}
            <Text w="fit-content" fontWeight="600" as="span">
              LaslesVPN.
            </Text>
          </Heading>
          <Text color="black">
            Provide a network for all your needs with ease and fun using{" "}
            <Text as="span" fontWeight="500">
              LaslesVPN
            </Text>{" "}
            discover interesting features from us.
          </Text>
        </Stack>
        <Button
          bg="primary.init"
          color="white"
          w="250px"
          h="60px"
          mt="50px"
          fontWeight="600"
          _hover={{ bg: "primary.dark" }}
        >
          Get Started
        </Button>
      </Stack>
      <Image src="/images/Illustration_1.svg" />
    </Stack>
  );
};

export default IntroComponent;
