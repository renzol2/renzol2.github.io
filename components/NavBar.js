import { Flex, Text, Box, Heading, Link } from '@chakra-ui/react';
import NAV from '../constants/nav';

function NavBar() {
  return (
    <Box>
      <Flex px={4} pt={2} color="white" alignItems="center">
        <Heading size="lg" fontFamily="monospace" p={2} fontWeight="bold">
          RL
        </Heading>
        <Box mx="auto" />
        {NAV.map((n) => (
          <Link href={n.href} isExternal={n.isExternal} p={2} key={n.href}>
            {n.text}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

export default NavBar;
