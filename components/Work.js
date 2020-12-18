import { Box, Center, VStack, Text, Heading, Link } from '@chakra-ui/react';
import LandingHeader from './LandingHeader';
import work from '../constants/work';
import ProjectCard from './ProjectCard';
import TikTok from './TikTok';
import ReactPlayer from 'react-player';
import CardComponent from './CardComponent';

export default function Work() {
  return (
    <Box w="100%">
      {/* Header */}
      <Center w="100%" h="100px">
        <LandingHeader>Things I've Created</LandingHeader>
      </Center>

      <VStack mx={['1%', '15%']}>
        {work.map((w) => (
          <ProjectCard project={w} />
        ))}
      </VStack>

      <Center w="100%" h="100px">
        <LandingHeader>Music I've Made</LandingHeader>
      </Center>

      <VStack mx={['1%', '25%']}>
        <CardComponent>
          <Center>
            <ReactPlayer url="https://www.youtube.com/watch?v=SSWk51o2wZ8&feature=youtu.be&t=1532" />
          </Center>
          <Heading py={1} size="lg">
            PSA Barkada Performance: The Multo
          </Heading>
          <Text pb="3vh">
            I created music for one of PSA's annual cultural dancing
            performance, which was featured in our annual Filipino Americans
            Coming Together (FACT) 2020 conference. With my experience in music
            technology and production, I produced 7 full minutes of music
            inspired by the indigenous Tboli tribe from the Philippines.
          </Text>
        </CardComponent>

        <CardComponent>
          <Center>
            <ReactPlayer url="https://www.youtube.com/watch?v=4qRN1XeKTYg" />
          </Center>
          <Heading py={1} size="lg">
            ISSF 2018 Closing Ceremony
          </Heading>
          <Text pb="3vh">
            During the summer before the 2018-2019 school year, I led a team of
            3 students as part of IMSA Student Productions to produce original
            music for the International Student Science Fair in a variety of
            mediums, including video broadcasts, in-person panels/ceremonies,
            and livestreams. This video, shown during the closing ceremony, is
            an example of our work.
          </Text>
        </CardComponent>

        <CardComponent>
          <TikTok />
          <Heading py={1} size="lg">
            TikTok
          </Heading>
          <Text pb="3vh">
            My latest TikTok! You can follow me{' '}
            <Link fontWeight="bold" href="https://www.tiktok.com/@zenr0">
              @zenr0
            </Link>
          </Text>
        </CardComponent>
      </VStack>
    </Box>
  );
}
