import { Flex, Heading } from '@chakra-ui/core';

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Heading
        fontWeight="400"
        fontSize={['20px', '100px']}
        color="white"
        py="300px"
      >
        👋, 🌎! My name is <b>Renzo.</b>
      </Heading>
    </Flex>
  );
}
