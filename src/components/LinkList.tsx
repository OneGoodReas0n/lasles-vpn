import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export interface LinkListProps {
  title: string;
  links: string[];
}

const LinkList: React.FC<LinkListProps> = ({ title, links }) => {
  return (
    <Stack spacing="20px">
      <Text color="black" fontWeight="medium">
        {title}
      </Text>
      <Stack spacing="10px">
        {links.map((l) => (
          <Text color="grey">{l}</Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default LinkList;
