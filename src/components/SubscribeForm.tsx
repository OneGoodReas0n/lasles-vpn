import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  ModalHeader,
  Box,
  Button,
} from "@chakra-ui/react";
import Btn from "./Btn";

export interface SubscribeFormProps {
  setModalOpen(state: boolean): void;
  isModalOpen: boolean;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  setModalOpen,
  isModalOpen,
}) => {
  return (
    <Modal
      isCentered
      onClose={() => setModalOpen(false)}
      isOpen={isModalOpen}
      motionPreset="slideInBottom"
      size="md"
    >
      <ModalOverlay />
      <ModalContent px="10px" py="20px">
        <ModalHeader textAlign="center" fontFamily="Rubik" fontWeight="medium">
          Subscription
        </ModalHeader>
        <ModalBody>
          <FormControl id="name" my="10px">
            <FormLabel>Your name</FormLabel>
            <Input type="name" />
          </FormControl>
          <FormControl id="email" my="10px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Button
            mt="20px"
            py="25px"
            w="100%"
            color="white"
            bg="primary.init"
            onClick={() => setModalOpen(false)}
            _hover={{ bg: "primary.dark" }}
          >
            Get in touch
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SubscribeForm;
