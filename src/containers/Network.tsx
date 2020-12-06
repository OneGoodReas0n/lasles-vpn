import React from "react";
import { Box, Heading, Flex, Stack, Text, Image } from "@chakra-ui/react";

export interface NetworkProps {}

const Network: React.FC<NetworkProps> = ({}) => {
  const apps: string[] = [
    "/images/icons/netflix.svg",
    "/images/icons/reddit.svg",
    "/images/icons/amazon.svg",
    "/images/icons/discord.svg",
    "/images/icons/spotify.svg",
  ];
  return (
    <Box mt="150px">
      <Stack spacing="150px" align="center">
        <Stack spacing="20px" align="center">
          <Heading
            w="65%"
            textAlign="center"
            lineHeight="1.5"
            fontSize="35px"
            fontWeight="medium"
            fontFamily="Rubik"
            color="black"
          >
            Huge Global Network of Fast VPN
          </Heading>
          <Text lineHeight="2" textAlign="center" color="grey" w="87%">
            See{" "}
            <Text fontWeight="medium" as="span">
              LaslesVPN
            </Text>{" "}
            everywhere to make it easier for you when you move locations.
          </Text>
        </Stack>
        <Image src="/images/global_map.svg" w="1060px" h="538pxs" />
      </Stack>
      <Stack direction="row" spacing="40px" justify="center" align="center">
        {apps.map((a) => (
          <Image src={a} key={a}/>
        ))}
      </Stack>
    </Box>
  );
};

export default Network;
