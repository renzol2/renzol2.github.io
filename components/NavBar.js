import { Flex, Text, Box, Heading, Link } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import nav from '../constants/nav';

function NavBar() {
  return (
    <Box>
      <Flex px={4} pt={2} color="white" alignItems="center">
        {/* Logo */}
        <Heading
          size="lg"
          fontFamily="monospace"
          px={3}
          py={2}
          fontWeight="bold"
        >
          RL
        </Heading>

        {/* Spacer */}
        <Box mx="auto" />

        {/* Navigation buttons */}
        {nav.map((n) => (
          <Link
            href={n.href}
            key={n.href}
            p={2}
            as={ScrollLink}
            activeClass="active"
            to={n.href}
            smooth={true}
            duration={500}
          >
            {n.text}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

export default NavBar;
