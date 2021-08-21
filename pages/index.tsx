import { Box, Center, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  const Paragraph = ({ children }) => (
    <Text
      mb="1.5rem"
      fontFamily="monospace"
      fontSize="lg"
      fontWeight="light"
      lineHeight="tall"
    >
      {children}
    </Text>
  );

  return (
    <Center h="100vh">
      <Box w="58%">
        <Heading as="h1" fontFamily="monospace" fontSize="8xl">
          *Renzo Ledesma
        </Heading>
        <Box w="85%">
          <Paragraph>
            Hi! 👋 I’m a web developer, musician & music-lover, coffee drinker,
            and CS + Music Student @ UIUC.
          </Paragraph>
          <Paragraph>
            Currently working as a SWE Intern @ Cargill. I enjoy creating
            everything from web apps to piano covers! View my projects, resume,
            or contact me :)
          </Paragraph>
        </Box>
      </Box>
    </Center>
  );
}
