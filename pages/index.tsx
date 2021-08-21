import { Box, Center, Heading } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import StyledLink from '../components/StyledLink';

const Home = () => {
  const BREAKPOINT = 'md';
  return (
    <Center minH="100vh">
      <Box w={{ base: '90%', [BREAKPOINT]: '58%' }}>
        <Heading
          as="h1"
          fontFamily="monospace"
          fontSize={{ base: '4rem', [BREAKPOINT]: '6rem' }}
          lineHeight="3.4rem"
        >
          *Renzo Ledesma
        </Heading>
        <Box w={{ base: '100%', [BREAKPOINT]: '85%' }} mt="2rem">
          <Paragraph>
            Hi! 👋 I’m a web developer, musician & music-lover, coffee drinker,
            and CS + Music Student @ UIUC.
          </Paragraph>
          <Paragraph>
            Most recently, I was working as a SWE Intern @ Cargill. I enjoy
            creating everything from web apps to piano covers!
          </Paragraph>
          <Paragraph>
            This website is a WIP, so check out my{' '}
            <StyledLink href="https://www.linkedin.com/in/renzo-marc-ledesma/">
              LinkedIn
            </StyledLink>{' '}
            and{' '}
            <StyledLink href="https://github.com/renzol2">GitHub</StyledLink>{' '}
            right now. Or, check out{' '}
            <StyledLink href="/is390">
              this article I wrote on Asian representation in superhero comics.
            </StyledLink>
          </Paragraph>
        </Box>
      </Box>
    </Center>
  );
};

export default Home;
