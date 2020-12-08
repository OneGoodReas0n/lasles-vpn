import React from "react";
import { Box, Stack, Text, Image, Link, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import LinkList, { LinkListProps } from "../components/LinkList";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const FacebookSVG = () => (
    <Icon width="20px" height="20px" viewBox="0 0 22 24" className="socialIcon">
      <path d="M19.1909 13.5L20.1685 9.15656H14.0559V6.33797C14.0559 5.14969 14.9098 3.99141 17.6474 3.99141H20.4263V0.293438C20.4263 0.293438 17.9045 0 15.4935 0C10.4596 0 7.16923 2.08031 7.16923 5.84625V9.15656H1.57367V13.5H7.16923V24H14.0559V13.5H19.1909Z" />
    </Icon>
  );
  const TwitterSVG = () => (
    <Icon width="20px" height="20px" viewBox="0 0 23 20" className="socialIcon">
      <path d="M20.7111 5.22503C20.7251 5.43822 20.7251 5.65145 20.7251 5.86464C20.7251 12.3671 16.1883 19.8595 7.89639 19.8595C5.34181 19.8595 2.96873 19.0524 0.972534 17.6515C1.33549 17.6971 1.68444 17.7123 2.06136 17.7123C4.16919 17.7123 6.10958 16.9357 7.65907 15.6108C5.67684 15.5651 4.01567 14.1489 3.44332 12.1997C3.72253 12.2453 4.0017 12.2758 4.29488 12.2758C4.69969 12.2758 5.10454 12.2148 5.48142 12.1083C3.41544 11.6514 1.8659 9.67173 1.8659 7.28088V7.21998C2.46613 7.58547 3.16416 7.81389 3.90395 7.84431C2.68948 6.96105 1.89383 5.45345 1.89383 3.74786C1.89383 2.83417 2.11714 1.99661 2.50802 1.26564C4.72757 4.25041 8.06388 6.19961 11.805 6.41284C11.7352 6.04736 11.6933 5.66669 11.6933 5.28597C11.6933 2.57528 13.7034 0.367188 16.2022 0.367188C17.5004 0.367188 18.673 0.961094 19.4966 1.92048C20.5156 1.7073 21.4927 1.29611 22.3583 0.732672C22.0232 1.87483 21.3113 2.83422 20.376 3.44331C21.2834 3.33677 22.1628 3.06259 22.9724 2.68192C22.3583 3.6565 21.5905 4.52448 20.7111 5.22503V5.22503Z" />
    </Icon>
  );
  const InstagramSVG = () => (
    <Icon width="20px" height="20px" viewBox="0 0 22 24" className="socialIcon">
      <g clip-path="url(#clip0)">
        <path d="M11.0049 6.60952C7.88171 6.60952 5.36251 9.01421 5.36251 11.9955C5.36251 14.9767 7.88171 17.3814 11.0049 17.3814C14.1281 17.3814 16.6473 14.9767 16.6473 11.9955C16.6473 9.01421 14.1281 6.60952 11.0049 6.60952ZM11.0049 15.497C8.98662 15.497 7.33662 13.9267 7.33662 11.9955C7.33662 10.0642 8.98171 8.4939 11.0049 8.4939C13.0281 8.4939 14.6732 10.0642 14.6732 11.9955C14.6732 13.9267 13.0232 15.497 11.0049 15.497V15.497ZM18.1942 6.38921C18.1942 7.08765 17.6049 7.64546 16.8781 7.64546C16.1464 7.64546 15.5621 7.08296 15.5621 6.38921C15.5621 5.69546 16.1513 5.13296 16.8781 5.13296C17.6049 5.13296 18.1942 5.69546 18.1942 6.38921ZM21.9312 7.66421C21.8478 5.9814 21.4451 4.49077 20.1536 3.26265C18.867 2.03452 17.3054 1.65015 15.5424 1.56577C13.7254 1.46733 8.27947 1.46733 6.46251 1.56577C4.70448 1.64546 3.14287 2.02983 1.85136 3.25796C0.559842 4.48608 0.162074 5.97671 0.0736815 7.65952C-0.0294433 9.3939 -0.0294433 14.5923 0.0736815 16.3267C0.157164 18.0095 0.559842 19.5001 1.85136 20.7283C3.14287 21.9564 4.69957 22.3408 6.46251 22.4251C8.27947 22.5236 13.7254 22.5236 15.5424 22.4251C17.3054 22.3455 18.867 21.9611 20.1536 20.7283C21.4402 19.5001 21.8428 18.0095 21.9312 16.3267C22.0344 14.5923 22.0344 9.39858 21.9312 7.66421V7.66421ZM19.5839 18.1876C19.2009 19.1064 18.4594 19.8142 17.492 20.1845C16.0433 20.733 12.6058 20.6064 11.0049 20.6064C9.40403 20.6064 5.96162 20.7283 4.51787 20.1845C3.55537 19.8189 2.81386 19.1111 2.42591 18.1876C1.85136 16.8048 1.98395 13.5236 1.98395 11.9955C1.98395 10.4673 1.85627 7.1814 2.42591 5.80327C2.80895 4.88452 3.55046 4.17671 4.51787 3.8064C5.96653 3.25796 9.40403 3.38452 11.0049 3.38452C12.6058 3.38452 16.0482 3.26265 17.492 3.8064C18.4545 4.17202 19.196 4.87983 19.5839 5.80327C20.1585 7.18608 20.0259 10.4673 20.0259 11.9955C20.0259 13.5236 20.1585 16.8095 19.5839 18.1876Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="22" height="24" fill="primary.dark" />
        </clipPath>
      </defs>
    </Icon>
  );
  const socials = [
    {
      title: "facebook",
      icon: () => <FacebookSVG />,
    },
    {
      title: "twitter",
      icon: () => <TwitterSVG />,
    },
    {
      title: "instagram",
      icon: () => <InstagramSVG />,
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
                    className="link"
                    p="8px"
                    border="2px solid"
                    borderColor="primary.dark"
                    borderRadius="50%"
                    _hover={{ bg: "primary.init" }}
                  >
                    <Flex justifyContent="center" alignItems="center">
                      {s.icon()}
                    </Flex>
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
