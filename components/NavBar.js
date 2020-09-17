import { Flex, Text, Box } from '@chakra-ui/core';

function NavBar() {
  return (
    <div>
      <Flex px={2} color="white" alignItems="center">
        <Text p={2} fontWeight="bold">
          Renzo
        </Text>
        <Box mx="auto" />
        {['About', 'Projects', 'GitHub'].map((nav) => (
          <Text key={nav} mx="2">{nav}</Text>
        ))}
      </Flex>
    </div>
  );
}

export default NavBar;
