import { Flex, Heading, Image, Text } from '@chakra-ui/core';

export default function Home() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      py="50px"
    >
      <Heading as="h1" fontSize={['85px', '90px']}>
        👋, 🌎!
      </Heading>
      <Image
        my="40px"
        height="300px"
        width="300px"
        rounded="full"
        src="images/renzo.jpg"
        alt="Renzo Ledesma"
      />
      <Text fontSize={['20px', '40px']} fontFamily="sans-serif">
        hi! i'm renzo. nice to meet you!
      </Text>
    </Flex>
  );
}
