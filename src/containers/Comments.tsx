import React, { useState } from "react";
import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CommentCard, { CommentCardProps } from "../components/CommentCard";
import Slider, { Settings } from "react-slick";

export interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  const PrevBtn = (props) => {
    const { onClick } = props;
    return (
      <Flex
        position="absolute"
        top="270px"
        right="70px"
        justifyContent="center"
        alignItems="center"
        w="60px"
        h="60px"
        border="2px solid"
        borderColor="primary.init"
        borderRadius="50%"
        as="button"
        onClick={onClick}
        outline="none"
      >
        <ArrowBackIcon color="primary.init" fontSize="30px" />
      </Flex>
    );
  };

  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <Flex
        position="absolute"
        top="270px"
        right="0"
        justifyContent="center"
        alignItems="center"
        as="button"
        w="60px"
        h="60px"
        bg="primary.init"
        borderRadius="50%"
        onClick={onClick}
        outline="none"
      >
        <ArrowBackIcon
          color="white"
          fontSize="30px"
          transform="rotate(180deg)"
        />
      </Flex>
    );
  };

  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };
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
    {
      avatarSrc: "/images/avatars/man2.svg",
      comment: "“They have made everything so easy for me. Great work ! ”.",
      location: "New York, USA",
      name: "Jane Dou",
      rate: 5,
    },
  ];

  return (
    <Box mt="50px" px="30px">
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
      <Box mt="60px" overflow="hidden">
        <Slider {...settings} className="slider">
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
        </Slider>
      </Box>
      <Flex mt="60px" justifyContent="space-between" alignItems="center">
        {/* <Box w="45px" h="15px" bg="primary.init" borderRadius="20px"></Box> */}
      </Flex>
    </Box>
  );
};

export default Comments;
