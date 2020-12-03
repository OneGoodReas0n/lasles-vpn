import React from "react";
import { Box, Stack, Image, Heading, Text } from "@chakra-ui/react";

export interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = ({}) => {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN.",
    "No specific time limits.",
  ];

  return (
    <Box mt="55px">
      <Stack direction="row" align="center" spacing="160px">
        <Image src="/images/Illustration_2.svg" />
        <Stack spacing="20px">
          <Heading
            fontFamily="Rubik"
            fontSize="35px"
            fontWeight="medium"
            color="black"
            lineHeight="1.5"
          >
            We Provide Many Features You Can Use
          </Heading>
          <Text color="grey">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </Text>
          <Stack spacing="20px">
            {features.map((f) => (
              <Stack spacing="10px" key={f} direction="row">
                <Image src="/images/icons/point.svg" w="24px" h="24px" />
                <Text fontSize="14px" color="grey">
                  {f}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Features;
