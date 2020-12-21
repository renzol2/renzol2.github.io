import { Center, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import CardComponent from './CardComponent';

export default function VideoCard({ videoUrl, heading, text }) {
  return (
    <CardComponent>
      <Center>
        <ReactPlayer url={videoUrl} />
      </Center>
      <Heading py={1} size="lg">
        {heading}
      </Heading>
      <Text pb="3vh">{text}</Text>
    </CardComponent>
  );
}
