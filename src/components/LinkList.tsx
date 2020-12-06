import { Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

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
          <NextLink href="#" key={l}>
            <Link>
              <Text color="grey">{l}</Text>
            </Link>
          </NextLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default LinkList;
