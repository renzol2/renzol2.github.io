import { Heading, Text } from '@chakra-ui/core';
import { Center, Container } from '@chakra-ui/layout'
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import NavBar from '../components/NavBar';

const MotionHeading = motion.custom(Heading);

export default function Home() {
  return (
    <div>
      <NavBar />
      <Center h={600}>
        <Container>
          <AnimatedTitle />
          
        </Container>
      </Center>
      <Center h={'100px'} bgColor={'white'}>
        <Heading>
          About me
        </Heading>
      </Center>
    </div>
  );
}
