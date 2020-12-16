import { Avatar, Heading, Grid, Image, Text, Box } from '@chakra-ui/core';
import { Center, Container } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import NavBar from '../components/NavBar';

const MotionHeading = motion.custom(Heading);

export default function Home() {
  return (
    <div>
      <NavBar />
      <Center h={[300, 600]}>
        <Container>
          <AnimatedTitle />
        </Container>
      </Center>
      <Container bgColor={'white'} py="20" px={['10%', '20%']}>
        <Center h={'100px'} pb="20">
          <Heading textAlign="center">About me</Heading>
        </Center>
        <Grid templateColumns={['100%', 'repeat(2, 1fr)']}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            rutrum eros eu odio viverra, nec ullamcorper mi pulvinar. Duis elit
            lorem, dapibus eu orci vel, dictum efficitur ante. Suspendisse
            feugiat nunc non pretium porttitor. Vivamus id posuere nibh. Ut a
            placerat dolor, scelerisque suscipit nisi. Integer eget magna a
            lorem mattis tincidunt sed et erat. Nullam rhoncus pharetra tortor,
            non pellentesque ante varius sed. Donec diam mauris, faucibus nec
            tortor quis, egestas malesuada risus. Nam sit amet tristique turpis.
            Nulla tristique neque metus, sed mattis leo efficitur sed. Donec
            vitae volutpat nulla. Praesent aliquet sit amet risus ut cursus. In
            hac habitasse platea dictumst. Suspendisse molestie sem eu sapien
            elementum, non cursus augue hendrerit. Duis vehicula massa vel
            sagittis pretium. Vestibulum finibus sagittis consequat.
          </Text>
          <Image src="/images/portrait.jpg" />
        </Grid>
      </Container>
    </div>
  );
}
