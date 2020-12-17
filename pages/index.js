import { Box, Center } from '@chakra-ui/layout';
import AnimatedTitle from '../components/AnimatedTitle';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <Box w="100%" backgroundColor="#D60270">
      <NavBar />
      <Center w="100%" h="90vh">
        <AnimatedTitle />
      </Center>
    </Box>
  );
}
