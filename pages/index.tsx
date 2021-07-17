import { Box, Center, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Center w="100%" h="100vh">
      <Box>
        <Heading textAlign="center" mb={5}>
          Hi! 👋 I'm under construction.
        </Heading>
        <Text textAlign="center">
          While I'm still being worked on, check out{' '}
          <NextLink href="/is390" passHref>
            <Link color="#D60270" fontWeight="bold">
              this article I wrote on Asian representation in superhero comics.
            </Link>
          </NextLink>
        </Text>
      </Box>
    </Center>
  );
}
