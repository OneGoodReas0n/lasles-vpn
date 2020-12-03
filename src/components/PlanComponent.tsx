import React from "react";
import { Box, Stack, Image, Text, Button, Flex } from "@chakra-ui/react";

export interface PlanComponentProps {
  id: number;
  imageSrc: string;
  previleges: string[];
  title: string;
  price: number;
  states: boolean[];
  setStates(states: boolean[]): void;
}

const PlanComponent: React.FC<PlanComponentProps> = ({
  id,
  previleges,
  imageSrc,
  title,
  price,
  states,
  setStates,
}) => {
  const isSelected = states[id - 1];
  return (
    <Box
      borderRadius="10px"
      border="2px solid"
      borderColor={isSelected ? "border.red" : "border.grey"}
    >
      <Flex flexDirection="column" pt="80px" pb="50px" px="70px" h="100%">
        <Box flexGrow={1}>
          <Stack align="center">
            <Image src={imageSrc} w="145px" h="165px" />
            <Text
              color="black"
              fontSize="18px"
              textAlign="center"
              fontWeight="medium"
            >
              {title}
            </Text>
            <Stack spacing="10px">
              {previleges.map((p) => (
                <Stack spacing="20px" direction="row" align="center" key={p}>
                  <Image src="/images/icons/jam_check.svg" />
                  <Text color="grey" fontSize="14px">
                    {p}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Flex direction="column">
          {price === 0 ? (
            <Text
              fontSize="25px"
              color="black"
              fontWeight="medium"
              mt="50px"
              textAlign="center"
            >
              Free
            </Text>
          ) : (
            <Text
              fontSize="25px"
              color="black"
              fontWeight="medium"
              mt="50px"
              textAlign="center"
            >
              ${price}{" "}
              <Text as="span" fontSize="25px" fontWeight="normal" color="black">
                /
              </Text>
              <Text as="span" fontSize="25px" fontWeight="normal" color="grey">
                {" "}
                mo
              </Text>
            </Text>
          )}
          <Button
            mt="20px"
            variant={isSelected ? "solid" : "outline"}
            bg={isSelected ? "primary.init" : "transparent"}
            borderColor={isSelected ? "transparent" : "primary.init"}
            color={isSelected ? "white" : "primary.init"}
            _hover={{ bg: "primary.init", color: "white" }}
            onClick={() => {
              const newStates = [false, false, false];
              newStates[id - 1] = true;
              setStates(newStates);
            }}
          >
            Select
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PlanComponent;
