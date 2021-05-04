import { Box, Center, Heading } from '@chakra-ui/layout';
import HeroRatioGraph from '../components/HeroRatioGraph';
import HeroNeutralRatioGraph from '../components/HeroNeutralRatioGraph';
import RacialDiversityGraph from '../components/RacialDiversityGraph';

export default function IS390() {
  return (
    <Box w="100%">
      <Heading textAlign="center" fontWeight="hairline" p="2%">
        The State of Asian Superheroes in Comics
      </Heading>
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
