import {
  Box,
  Center,
  Flex,
  Grid,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import AnimatedTitle from '../components/AnimatedTitle';
import FadingComponent from '../components/FadingComponent';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <Box w="100%" backgroundColor="#9B4F96">
      {/* Color bar */}
      <Flex py={1} backgroundColor="#0038A8" />

      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Center w="100%" h={['50vh', '90vh']} px={['10%', '0%']}>
        <AnimatedTitle />
      </Center>

      {/* About */}
      <Grid px={['5%', '15%']} templateColumns={['100%', '35% 65%']}>
        <FadingComponent>
          <Center pb={5}>
            <Image
              alt="Renzo Ledesma"
              src="images/profile_pic.jpg"
              h={[150, 350]}
              borderRadius={[100, 50]}
            />
          </Center>
        </FadingComponent>
        <Center>
          <Box color="white" fontSize={['xl', '3xl']} fontWeight="light" px={5}>
            <Text>
              Hi! I'm <b>Renzo</b>, a sophomore at UIUC studying Computer
              Science + Music. I enjoy creating things, specifically websites,
              apps, and music. Here are some technologies I've been working with
              recently:
            </Text>
            <Grid
              templateColumns="60% 40%"
              fontSize={['xl', '2xl']}
              px={2}
              py={2}
            >
              <UnorderedList>
                {['Web development (React)', 'C++', 'WordPress'].map((item) => (
                  <ListItem>{item}</ListItem>
                ))}
              </UnorderedList>
              <UnorderedList>
                {['Reason 11', 'Ableton Live', 'Musescore'].map((item) => (
                  <ListItem>{item}</ListItem>
                ))}
              </UnorderedList>
            </Grid>
          </Box>
        </Center>
      </Grid>
    </Box>
  );
}
