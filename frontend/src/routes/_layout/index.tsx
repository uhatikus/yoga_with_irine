import { Box, Container, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: Main,
});

function Main() {
  return (
    <>
      <Container maxW="100%" margin="0" padding="0">
        <Box
          bgImage="/public/assets/images/YOGA_MAIN.jpg"
          bgSize="cover"
          bgPosition="center"
          clipPath="inset(34% 0 10% 0)"
          h="1500"
          margin="-520px 0 -500px 0"
        >
          <Box pt={500}>
            <Text fontSize="90" color="#3399ff" opacity="50%">
              Open Soul
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
