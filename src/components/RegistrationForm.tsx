import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Btn from "./Btn";

export interface RegistrationFormProps {
  formState: string;
  setForm(state: "login" | "register"): void;
  isModalOpen: boolean;
  setModalOpen(state: boolean): void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formState,
  setForm,
  isModalOpen,
  setModalOpen,
}) => {
  const auth = [
    { title: "facebook", src: "/images/auth/facebook.svg" },
    { title: "google", src: "/images/auth/google.svg" },
    { title: "linkedin", src: "/images/auth/linkedin.svg" },
  ];
  const ref = React.useRef() as React.RefObject<HTMLInputElement>;

  useEffect(() => {
    ref.current?.focus();
  }, [isModalOpen]);

  return (
    <Modal
      isCentered
      onClose={() => setModalOpen(false)}
      isOpen={isModalOpen}
      motionPreset="slideInBottom"
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p="0">
          {formState === "login" ? (
            <Stack direction="row" h="100%">
              <Box w="70%" p="30px">
                <Stack spacing="40px">
                  <Stack align="center" spacing="30px">
                    <Heading
                      textAlign="center"
                      fontSize="24px"
                      fontFamily="Rubik"
                      fontWeight="medium"
                      color="color"
                    >
                      Sign in to LaslesVPN
                    </Heading>
                    <Stack direction="row">
                      {auth.map((method) => (
                        <Button key={method.title} borderRadius="50%" px="11px">
                          <Image src={method.src} h="16px" w="16px" />
                        </Button>
                      ))}
                    </Stack>
                    <Stack spacing="10px">
                      <Text fontSize="14px" color="gray.400" textAlign="center">
                        or use your email account:
                      </Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<EmailIcon color="gray.300" />}
                        />
                        <Input
                          type="text"
                          placeholder="Email"
                          bg="#F3F8F7"
                          borderRadius="0"
                          w="300px"
                          ref={ref}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<LockIcon color="gray.300" />}
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          bg="#F3F8F7"
                          borderRadius="0"
                          w="300px"
                        />
                      </InputGroup>
                    </Stack>
                    <Link textDecoration="underline">Forgot password?</Link>
                    <Btn
                      title="Sign in"
                      variant="default"
                      onClick={() => setModalOpen(false)}
                    />
                  </Stack>
                </Stack>
              </Box>
              <Box bg="primary.dark" borderRightRadius="6px">
                <Stack spacing="30px" justify="center" align="center" h="100%">
                  <Heading
                    fontFamily="Rubik"
                    color="white"
                    fontSize="30px"
                    fontWeight="medium"
                  >
                    Hello, Friend!
                  </Heading>
                  <Text
                    color="white"
                    fontWeight="normal"
                    textAlign="center"
                    w="90%"
                  >
                    Enter your personal details and start journey with us
                  </Text>
                  <Btn
                    title="Sign up"
                    variant="outline"
                    onClick={() => setForm("register")}
                  />
                </Stack>
              </Box>
            </Stack>
          ) : (
            <Stack direction="row" h="100%">
              <Box bg="primary.init" p="30px" borderLeftRadius="6px">
                <Stack spacing="30px" justify="center" align="center" h="100%">
                  <Heading
                    fontFamily="Rubik"
                    color="white"
                    fontSize="30px"
                    fontWeight="medium"
                  >
                    Welcome Back!
                  </Heading>
                  <Text
                    color="white"
                    fontWeight="normal"
                    textAlign="center"
                    w="90%"
                  >
                    To keep connected with us please login with your personal
                    data
                  </Text>
                  <Btn
                    title="Sign in"
                    variant="outline"
                    onClick={() => setForm("login")}
                  />
                </Stack>
              </Box>
              <Box w="70%" p="30px">
                <Stack spacing="30px" align="center" justify="center">
                  <Stack align="center" spacing="30px">
                    <Heading
                      textAlign="center"
                      fontSize="24px"
                      fontFamily="Rubik"
                      fontWeight="medium"
                      color="color"
                    >
                      Create new account
                    </Heading>
                    <Stack direction="row">
                      {auth.map((method) => (
                        <Button key={method.title} borderRadius="50%" px="11px">
                          <Image src={method.src} h="16px" w="16px" />
                        </Button>
                      ))}
                    </Stack>
                    <Stack spacing="10px">
                      <Text fontSize="14px" color="gray.400" textAlign="center">
                        or use your email for registration:
                      </Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<InfoIcon color="gray.300" />}
                        />
                        <Input
                          type="text"
                          placeholder="Name"
                          bg="#F3F8F7"
                          borderRadius="0"
                          w="300px"
                          ref={ref}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<EmailIcon color="gray.300" />}
                        />
                        <Input
                          type="text"
                          placeholder="Email"
                          bg="#F3F8F7"
                          borderRadius="0"
                          w="300px"
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<LockIcon color="gray.300" />}
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          bg="#F3F8F7"
                          borderRadius="0"
                          w="300px"
                        />
                      </InputGroup>
                    </Stack>
                    <Btn
                      title="Sign up"
                      variant="default"
                      onClick={() => setModalOpen(false)}
                    />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationForm;
