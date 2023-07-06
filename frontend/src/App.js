import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import Rewards from "./Rewards";
import { SimpleGrid, Fade, Flex, Box, Card, Stack, StackDivider, Heading, CardHeader,CardBody, Container, Text } from "@chakra-ui/react";

function App() {
  // if you're developing and just want to see the dapp without going through the Polygon ID flow,
  // temporarily set this to "true" to ignore the Polygon ID check and go straight to the dapp page
  const [provedPassedQuiz, setProvedPassedQuiz] = useState(false);
  return (
    <>
      <Flex justify="center" h="100vh" className="vc-check-page">
        <SimpleGrid minChildWidth='450px' spacing='5px'>
        <Box></Box>
        <Container>
          <Card variant="outline" className="vc-card-bg" bgColor="transparent" backdropFilter="blur(10px)">
            <CardHeader pb={0}>
              <Heading size="lg" mb={0} bgGradient='linear(to-l, #7b3fe4, #a726c1)'
bgClip='text'>Protect Yourself, Unlock Rewards</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Text fontSize="xl">
                    <Text as="b">SAFU Perks</Text> rewards crypto explorers that have earned Verifiable Credentials (VCs) related to knowledge of web3 security concepts.
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xl">
                    Prove that you have successfully passed at least one anti-phishing quiz to unlock these rewards…
                  </Text>
                  <Rewards />
                </Box>
                <Box>
                  {provedPassedQuiz ? (
                    <Fade in={provedPassedQuiz}>
                      <Text align="center" mb="4"><Text as="b">You have earned the following rewards through your Proof of Knowledge of Anti-Phishing…</Text></Text>
                      <Text align="center">Discord Nitro (3-Months): <Text as="kbd">N0T4N-4CTU4L-PR0M0-C0D3</Text></Text>
                      <Text align="center">Zengo Pro(6-Months): <Text as="kbd">N0T4N-4CTU4L-PR0M0-C0D3</Text></Text>
                    </Fade>
                  ) : (
                    <PolygonIDVerifier
                    publicServerURL={
                      process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                    }
                    localServerURL={
                      process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                    }
                    credentialType={"POKAntiPhishing"}
                    issuerOrHowToLink={
                      "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                    }
                    onVerificationResult={setProvedPassedQuiz}
                    />
                  )}
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default App;
