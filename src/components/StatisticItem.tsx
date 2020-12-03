import React from "react";
import { Stack, Image, Text, Box, Flex } from "@chakra-ui/react";

export interface StatisticItemProps {
  numbers: number;
  item: string;
  img: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  item,
  numbers,
  img,
}) => {
  return (
    <Flex alignItems="center">
      <Box py="68px">
        <Stack direction="row" spacing="36px" align="center">
          <Box bg="primary.inactive" borderRadius="50%" p="15px">
            <Image src={img} />
          </Box>
          <Stack spacing="5px">
            <Text fontWeight="600" fontSize="25px" color="black">
              {numbers}+
            </Text>
            <Text fontSize="20px" color="grey">
              {item}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default StatisticItem;
