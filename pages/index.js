import {
  Box,
  Center,
  Flex,
  Heading,
} from '@chakra-ui/layout';
import About from '../components/About';
import AnimatedTitle from '../components/AnimatedTitle';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Work from '../components/Work';
import colors from '../styles/colors';

export default function Home() {
  return (
    <Box
      w="100%"
      backgroundColor={colors.PURPLE}
      color="white"
    >
      {/* Color bar */}
      <Flex py={1} backgroundColor={colors.MAGENTA_DARK} />

      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Center
        w="100%"
        minH="400px"
        h={['50vh', '93vh', '93vh', '93vh']}
        px={['10%', '3%']}
      >
        <AnimatedTitle />
      </Center>

      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Work */}
      <Work />

      {/* Coming soon */}
      <Center h={['50vh', '90vh']} px={['10%', 0]}>
        <Heading textAlign="center">
          More coming soon. Check back in a few days!
        </Heading>
      </Center>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
