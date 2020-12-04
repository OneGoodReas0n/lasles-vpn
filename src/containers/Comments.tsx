import React from "react";
import { Box, Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CommentCard, { CommentCardProps } from "../components/CommentCard";

export interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  const comments: CommentCardProps[] = [
    {
      avatarSrc: "/images/avatars/man1.svg",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      location: "Warsaw, Poland",
      name: "Viezh Robert",
      rate: 4.5,
    },
    {
      avatarSrc: "/images/avatars/women1.svg",
      comment:
        "“I like it because I like to travel far and still can connect with high speed.”.",
      location: "Shanxi, China",
      name: "Yessica Christy",
      rate: 4.5,
    },
    {
      avatarSrc: "/images/avatars/man2.svg",
      comment:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
      location: "Seoul, South Korea",
      name: "Kim Young Jou",
      rate: 4.5,
    },
  ];
  return (
    <Box mt="50px" pl="60px">
      <Stack spacing="20px" align="center">
        <Heading
          w="45%"
          fontFamily="Rubik"
          textAlign="center"
          fontSize="35px"
          color="black"
          fontWeight="medium"
          lineHeight="1.5"
        >
          Trusted by Thousands of Happy Customer
        </Heading>
        <Text w="50%" textAlign="center" color="grey" lineHeight="2">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </Text>
      </Stack>
      <Box mt="60px">
        <Stack direction="row" spacing="50px">
          {comments.map((c) => (
            <CommentCard
              key={c.name}
              avatarSrc={c.avatarSrc}
              comment={c.comment}
              location={c.location}
              name={c.name}
              rate={c.rate}
            />
          ))}
        </Stack>
      </Box>
      <Flex mt="60px" justifyContent="space-between" alignItems="center">
        <Stack spacing="15px" direction="row">
          <Box w="45px" h="15px" bg="primary.init" borderRadius="20px"></Box>
          <Box w="15px" h="15px" bg="lightgrey" borderRadius="50%"></Box>
          <Box w="15px" h="15px" bg="lightgrey" borderRadius="50%"></Box>
          <Box w="15px" h="15px" bg="lightgrey" borderRadius="50%"></Box>
        </Stack>
        <Stack direction="row" spacing="20px">
          <Flex
            justifyContent="center"
            alignItems="center"
            w="60px"
            h="60px"
            border="2px solid"
            borderColor="primary.init"
            borderRadius="50%"
          >
            <ArrowBackIcon color="primary.init" fontSize="30px" />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="60px"
            h="60px"
            bg="primary.init"
            borderRadius="50%"
          >
            <ArrowBackIcon
              color="white"
              fontSize="30px"
              transform="rotate(180deg)"
            />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Comments;
