import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ThankYouModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <>
      <Modal isCentered={true} size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"skyblue"}>
          <ModalHeader fontSize={"4xl"} textAlign="center">
            Checkout is completed!
          </ModalHeader>
          <ModalBody fontSize={"3xl"} textAlign="center">
            Thank you for shopping
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                navigate("/");
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ThankYouModal;
