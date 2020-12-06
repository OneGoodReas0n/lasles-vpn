import React from "react";
import { Box, Stack, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import LinkList, { LinkListProps } from "../components/LinkList";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const socials = [
    {
      title: "facebook",
      url: "/images/socials/facebook.svg",
    },
    {
      title: "twitter",
      url: "/images/socials/twitter.svg",
    },
    {
      title: "instagram",
      url: "/images/socials/instagram.svg",
    },
  ];
  const linkLists: LinkListProps[] = [
    {
      links: [
        "Download",
        "Pricing",
        "Locations",
        "Server",
        "Countries",
        "Blog",
      ],
      title: "Product",
    },
    {
      links: [
        "LaslesVPN?",
        "FAQ",
        "Tutorials",
        "About Us",
        "Privacy Policy",
        "Terms of Service",
      ],
      title: "Engage",
    },
    {
      links: ["Affilate", "Become Partner"],
      title: "Earn Money",
    },
  ];
  return (
    <Box mt="65px" pb="30px">
      <Stack direction="row" justify="space-between" align="center">
        <Stack spacing="20px">
          <Stack direction="row" spacing="10px">
            <Image src="/images/logo.svg" />
            <Text fontSize="20px" color="black" fontWeight="medium">
              Lasles
              <Text as="span" fontWeight="bold">
                VPN
              </Text>
            </Text>
          </Stack>
          <Stack spacing="30px">
            <Text color="grey" w="55%" lineHeight="2">
              <Text as="span" fontWeight="medium">
                LaslesVPN
              </Text>{" "}
              is a private virtual network that has unique features and has high
              security.
            </Text>
            <Stack direction="row" spacing="20px">
              {socials.map((s) => (
                <NextLink href={`/${s.title}`} key={s.title}>
                  <Link
                    border="1px solid"
                    borderColor="primary.init"
                    borderRadius="50%"
                    _hover={{ bg: "primary.init" }}
                  >
                    <Image src={s.url} />
                  </Link>
                </NextLink>
              ))}
            </Stack>
            <Text color="blankgrey">
              {" "}
              ©2020{" "}
              <Text as="span" fontWeight="medium">
                LaslesVPN
              </Text>
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row" spacing="80px">
          {linkLists.map((link) => (
            <LinkList title={link.title} links={link.links} key={link.title} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
