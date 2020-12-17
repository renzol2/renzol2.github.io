import { Flex, Text, Box, Heading, Link } from '@chakra-ui/react';

function NavBar() {
  return (
    <div>
      <Flex px={4} pt={2} color="white" alignItems="center">
        <Heading size="md" p={2} fontWeight="bold">
          RL
        </Heading>
        <Box mx="auto" />
        <Link href="https://github.com/renzol2" isExternal p={2}>
          GitHub
        </Link>
      </Flex>
    </div>
  );
}

export default NavBar;
