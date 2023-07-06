import {
  Box,
  Container,
  Center,
  Image,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import DiscordLogo from "./discord-logo.svg";
import ZengoLogo from "./zengo-logo.svg";

function VcGatedDapp() {
  return (
    <Container mt="8" mb="4">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Image src={DiscordLogo} m="0 auto" />
          <Text align="center" mt="2"><Text as="b">3-Months of Nitro</Text></Text>
        </Box>
        <Box>
          <Image src={ZengoLogo}  m="0 auto" />
          <Text align="center" mt="2"><Text as="b">6-Months of Pro</Text></Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default VcGatedDapp;
