import { Box, Center, Heading } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import StyledLink from '../components/StyledLink';
import colors from '../styles/colors';
import '@fontsource/roboto-mono';

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
            and{' '}
            <StyledLink
              color={colors.URBANA_ORANGE}
              href="https://music.illinois.edu/bachelor-science-computer-science-music"
            >
              CS + Music Student @ UIUC.
            </StyledLink>
          </Paragraph>
          <Paragraph>
            Most recently, I was working as a Full-Stack Software Engineering
            Intern @{' '}
            <StyledLink
              color={colors.CARGILL_GREEN}
              href="https://researchpark.illinois.edu/tenant_directory/cargill-innovation-lab/"
            >
              Cargill
            </StyledLink>
            . I enjoy creating everything from web apps to piano covers!
          </Paragraph>
          <Paragraph>
            This website is a WIP, so check out my{' '}
            <StyledLink
              color={colors.PRIMARY}
              href="https://www.linkedin.com/in/renzo-marc-ledesma/"
            >
              LinkedIn
            </StyledLink>{' '}
            and{' '}
            <StyledLink
              color={colors.PRIMARY}
              href="https://github.com/renzol2"
            >
              GitHub
            </StyledLink>{' '}
            right now. Or, check out{' '}
            <StyledLink color={colors.PRIMARY} href="/is390">
              this article I wrote on Asian representation in superhero comics.
            </StyledLink>
          </Paragraph>
        </Box>
      </Box>
    </Center>
  );
};

export default Home;
