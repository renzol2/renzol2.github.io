import { Box, Center, Heading } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';

const Home = () => {
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
            Most recently, I was working as a SWE Intern @ Cargill. I enjoy
            creating everything from web apps to piano covers! View my projects,
            resume, or contact me :)
          </Paragraph>
        </Box>
      </Box>
    </Center>
  );
};

export default Home;
