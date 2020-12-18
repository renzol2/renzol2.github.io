import {
  Box,
  Center,
  Flex,
  Grid,
  ListItem,
  Text,
  UnorderedList,
  Heading,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import About from '../components/About';
import AnimatedTitle from '../components/AnimatedTitle';
import Experience from '../components/Experience';
import FadingComponent from '../components/FadingComponent';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <Box w="100%" backgroundColor="#9B4F96" color="white">
      {/* Color bar */}
      <Flex py={1} backgroundColor="#D60270" />

      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Center w="100%" h={['50vh', '93vh']} px={['10%', '0%']}>
        <AnimatedTitle />
      </Center>

      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Work */}

      {/* Contact */}

      <Center h={['50vh', '90vh']} px={['10%', 0]}>
        <Heading textAlign="center">
          More coming soon. Check back in a few hours!
        </Heading>
      </Center>
      <Flex py={1} backgroundColor="#0038A8" />
    </Box>
  );
}
