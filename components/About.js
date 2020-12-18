import {
  Box,
  Center,
  Grid,
  Image,
  ListItem,
  UnorderedList,
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import FadingComponent from './FadingComponent';
import LandingHeader from './LandingHeader';

export default function About() {
  return (
    <Center w="100%" h="90vh">
      <Grid px={['5%', '15%']} templateColumns={['100%', '35% 65%']}>
        <FadingComponent>
          <Center pb={5}>
              <Image
                alt="Renzo Ledesma"
                src="images/profile_pic.jpg"
                boxSize={[150, 350]}
                borderRadius={[100, 50]}
                objectFit="cover"
              />
          </Center>
        </FadingComponent>
        <Center>
          <Box fontSize={['lg', '2xl']} fontWeight="light" px={5}>
            <Text>
              Hi! I'm <b>Renzo</b>, a sophomore at UIUC studying Computer Science
              and Music. I enjoy creating things, specifically websites, apps, and
              music. Here are some technologies and things I've been enjoying recently:
            </Text>
            <Grid
              templateColumns="60% 40%"
              fontSize={['md', '2xl']}
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
    </Center>
  );
}
