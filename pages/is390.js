import { Box, Center, Divider, Heading, Link, Text } from '@chakra-ui/layout';
import HeroRatioGraph from '../components/HeroRatioGraph';
import HeroNeutralRatioGraph from '../components/HeroNeutralRatioGraph';
import RacialDiversityGraph from '../components/RacialDiversityGraph';

export default function IS390() {
  return (
    <Box w="100%">
      <Box my="2%" mx="25%">
        <Heading as="h1" textAlign="left" fontWeight="black" fontSize="6xl">
          The State of Asian Superheroes in Comics
        </Heading>
        <Text as="h2" fontWeight="hairline" my={3}>
          <font style={{ fontWeight: 'normal' }}>Renzo Ledesma</font> | IS 390
          Independent Research Project
        </Text>
        <Divider mb="7%" mt="2%" />

        <Heading as="h3" fontWeight="bold">
          Motivation
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          Proper representation of marginalized groups in comics has been a core
          subject of this course, and I wanted to try applying some of my
          technical skills to the topic by creating some data visualizations
          regarding Asian characters in superhero comics.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          This project is essentially a rip-off of{' '}
          <Link
            to="http://ritvikmath.com/BlackCharactersInComics/"
            color="blueviolet"
          >
            this article by Ritvik Kharkar about this same exact topic but for
            Black characters in superhero comics.
          </Link>
          {' '}However, seeing as Kharkar wrote his article surrounding the start of
          Black History Month and the release of Marvel's Black Panther movie,
          this project is a perfect introduction to the start of AAPI Heritage
          Month.
        </Text>
      </Box>

      <Center h="60vh" my="5%">
        <RacialDiversityGraph />
      </Center>
      <Center h="60vh" my="5%">
        <HeroRatioGraph />
      </Center>
      <Center h="60vh" my="5%">
        <HeroNeutralRatioGraph />
      </Center>
    </Box>
  );
}
