import { Box, Center } from '@chakra-ui/layout';
import AnimatedTitle from '../components/AnimatedTitle';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <Box w="100%" backgroundColor="#9B4F96">
      <NavBar />
      <Center w="100%" h={['50vh', '90vh']}>
        <AnimatedTitle />
      </Center>
    </Box>
  );
}
