import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";

export interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Flex alignItems="center">
      <Image src="/images/logo.svg" mr="10px" w="35px" h="35px" />
      <Flex color="black">
        <Text fontSize="20px" fontWeight="medium">
          Lasles
        </Text>
        <Text
          fontSize="20px"
          fontWeight="bold"
          as="b"
          textTransform="uppercase"
        >
          VPN
        </Text>
      </Flex>
    </Flex>
  );
};

export default Logo;
