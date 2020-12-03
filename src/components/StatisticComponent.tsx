import React from "react";
import { Stack, BoxProps, Box } from "@chakra-ui/react";
import StatisticItem, { StatisticItemProps } from "./StatisticItem";

export interface StatisticComponentProps extends BoxProps {}

const StatisticComponent: React.FC<StatisticComponentProps> = ({
  ...options
}) => {
  const items: StatisticItemProps[] = [
    {
      item: "Users",
      numbers: 90,
      img: "/images/icons/Group.svg",
    },
    {
      item: "Divider",
      numbers: 0,
      img: "",
    },
    {
      item: "Locations",
      numbers: 30,
      img: "/images/icons/Vector.svg",
    },
    {
      item: "Divider",
      numbers: 0,
      img: "",
    },
    {
      item: "Servers",
      numbers: 50,
      img: "/images/icons/Server.svg",
    },
  ];

  return (
    <Box boxShadow="2xl" borderRadius="10px" px="90px">
      <Stack
        {...options}
        direction="row"
        justify="space-between"
        align="center"
      >
        {items.map((i, index) => {
          console.log(i);
          if (i.item === "Divider") {
            return <Box w="2px" h="125px" bg="#EEEFF2" key={index}></Box>;
          }
          return (
            <StatisticItem
              item={i.item}
              key={i.item}
              img={i.img}
              numbers={i.numbers}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default StatisticComponent;
