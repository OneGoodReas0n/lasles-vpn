import React from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

export interface CommentCardProps {
  avatarSrc: string;
  name: string;
  location: string;
  rate: number;
  comment: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  name,
  avatarSrc,
  comment,
  location,
  rate,
}) => {
  return (
    <Box
      borderRadius="10px"
      border="2px solid"
      borderColor="border.grey"
      p="30px"
      w="400px"
    >
      <Stack spacing="20px">
        <Stack direction="row" align="center" justify="space-between">
          <Image src={avatarSrc} w="50px" h="50px" />
          <Stack spacing="5px">
            <Text fontSize="18px" fontWeight="medium" color="black">
              {name}
            </Text>
            <Text fontSize="14px" color="grey">
              {location}
            </Text>
          </Stack>
          <Stack direction="row">
            <Text color="black" pl="30px">
              {rate}
            </Text>
            <Image src="/images/icons/star.svg" />
          </Stack>
        </Stack>
        <Text color="black">{comment}</Text>
      </Stack>
    </Box>
  );
};

export default CommentCard;
