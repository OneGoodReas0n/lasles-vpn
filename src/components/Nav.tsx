import React from "react";
import { Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
export interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Stack spacing="40px" direction="row">
      <NextLink href="#about">
        <Link color="grey">About</Link>
      </NextLink>
      <NextLink href="#features">
        <Link color="grey">Features</Link>
      </NextLink>
      <NextLink href="#pricing">
        <Link color="grey">Pricing</Link>
      </NextLink>
      <NextLink href="#testimonials">
        <Link color="grey">Testimonials</Link>
      </NextLink>
      <NextLink href="#help">
        <Link color="grey">Help</Link>
      </NextLink>
    </Stack>
  );
};

export default Nav;
