import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaHeart, FaComments, FaCalendarCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Your Relationship Coaching</Heading>
        <Text fontSize="lg" textAlign="center">Helping you build stronger, healthier relationships.</Text>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
          <Box textAlign="center">
            <FaHeart size="3em" />
            <Text mt={2}>Personalized Coaching</Text>
          </Box>
          <Box textAlign="center">
            <FaComments size="3em" />
            <Text mt={2}>Effective Communication</Text>
          </Box>
          <Box textAlign="center">
            <FaCalendarCheck size="3em" />
            <Text mt={2}>Flexible Scheduling</Text>
          </Box>
        </Box>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;