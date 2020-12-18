import { Flex, Text, Box, Heading, Link } from '@chakra-ui/react';

function NavBar() {
  return (
    <Box>
      <Flex px={4} pt={2} color="white" alignItems="center">
        <Heading size="lg" fontFamily="monospace" p={2} fontWeight="bold">
          RL
        </Heading>
        <Box mx="auto" />
        <Link href="https://github.com/renzol2" isExternal p={2}>
          GitHub
        </Link>
      </Flex>
    </Box>
  );
}

export default NavBar;
