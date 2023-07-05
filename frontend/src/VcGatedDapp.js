import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Spinner,
  Card,
  Center,
  VStack,
} from "@chakra-ui/react";

function VcGatedDapp() {
  return (
    <div id="vc-gated-dapp">
      <Box background="black" color="white" py={4}>
        <Container maxW={"80%"}>
          <Flex justifyContent="space-between">
            <Heading>My VC Gated Dapp</Heading>
          </Flex>
        </Container>
      </Box>
    </div>
  );
}

export default VcGatedDapp;
