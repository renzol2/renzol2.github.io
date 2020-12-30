import { Center, Box, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import CardComponent from './CardComponent';

export default function VideoCard({ videoUrl, heading, text }) {
  return (
    <CardComponent>
      <Center>
        <ReactPlayer url={videoUrl} />
      </Center>
      <Box mx={{ base: 0, md: '14%' }}>
        <Heading py={1} size="lg" textAlign="left">
          {heading}
        </Heading>
        <Text fontWeight="light" pb="3vh">{text}</Text>
      </Box>
    </CardComponent>
  );
}
