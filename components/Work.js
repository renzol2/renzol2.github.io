import { Box, Center, VStack } from '@chakra-ui/react';
import LandingHeader from './LandingHeader';
import ProjectCard from './ProjectCard';
import VideoCard from './VideoCard';
import work from '../constants/work';
import videos from '../constants/videos';

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

      <VStack mx={{ base: '1%', md: '20%'}}>
        {videos.map((vid) => (
          <VideoCard
            heading={vid.heading}
            text={vid.text}
            videoUrl={vid.url}
            key={vid.url}
          />
        ))}
      </VStack>
    </Box>
  );
}
