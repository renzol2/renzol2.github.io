import { Box, Center, Heading, useColorMode } from '@chakra-ui/react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import StyledLink from '../components/StyledLink';
import colors from '../styles/colors';

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const BREAKPOINT = 'md';
  return (
    <Box
      bgColor={isDark && colors.BACKGROUND_DARK}
      bgGradient={
        !isDark &&
        `linear(to-b, ${colors.BACKGROUND_PINK}, ${colors.BACKGROUND_ORANGE})`
      }
    >
      <Logo />
      <Center minH={{ base: '130vh', [BREAKPOINT]: '100vh' }}>
        <Box w={{ base: '90%', [BREAKPOINT]: '58%' }}>
          <Header as="h1" breakpoint={BREAKPOINT}>
            *Renzo Ledesma
          </Header>
          <Box w={{ base: '100%', [BREAKPOINT]: '85%' }} mt="2rem">
            <Paragraph>
              Hi! 👋 I’m a web developer, musician & music-lover, coffee
              drinker, and{' '}
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
                this article I wrote on Asian representation in superhero
                comics.
              </StyledLink>
            </Paragraph>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
