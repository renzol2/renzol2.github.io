import { Box, Center, VStack } from '@chakra-ui/react';
import LandingHeader from './LandingHeader';
import work from '../constants/work';
import ProjectCard from './ProjectCard';
import VideoCard from './VideoCard';

export default function Work() {
  return (
    <Box w="100%">
      {/* Header */}
      <Center w="100%" h="100px">
        <LandingHeader>Things I've Created</LandingHeader>
      </Center>

      <VStack mx={['1%', '15%']}>
        {work.map((w) => (
          <ProjectCard key={w.name} project={w} />
        ))}
      </VStack>

      <Center w="100%" h="100px">
        <LandingHeader>Music I've Made</LandingHeader>
      </Center>

      <VStack mx={['1%', '25%']}>
        <VideoCard
          videoUrl="https://www.youtube.com/watch?v=SSWk51o2wZ8&feature=youtu.be&t=1532"
          heading="PSA Barkada Performance: The Multo"
          text="I created music for one of PSA's annual cultural dancing
          performance, which was featured in our annual Filipino Americans
          Coming Together (FACT) 2020 conference. With my experience in music
          technology and production, I produced 7 full minutes of music
          inspired by the indigenous Tboli tribe from the Philippines."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/watch?v=4qRN1XeKTYg"
          heading="ISSF 2018 Closing Ceremony"
          text="During the summer before the 2018-2019 school year, I led a team of
          3 students as part of IMSA Student Productions to produce original
          music for the International Student Science Fair in a variety of
          mediums, including video broadcasts, in-person panels/ceremonies,
          and livestreams. This video, shown during the closing ceremony, is
          an example of our work."
        />

        <VideoCard
          videoUrl="https://www.youtube.com/watch?v=1DdlRB1_TGU"
          heading="Ludwig van Beethoven - Sonata No. 8 in C minor, Op.13 (Pathetique), Movement I"
          text="A solo piano performance of the first movement of Beethoven's 'Pathetique' 
          sonata. Recorded as an audition into the School of Music at the University of 
          Illinois at Urbana-Champaign."
        />
      </VStack>
    </Box>
  );
}
