import {
  Box,
  Center,
  Heading,
  ScaleFade,
  useColorMode,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import StyledLink from '../components/StyledLink';
import colors from '../styles/colors';
import '@fontsource/roboto-mono';

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const BREAKPOINT = 'md';
  return (
    <Box bgColor={isDark ? 'charcoal' : 'pink.100'}>
      <Logo />
      <Center minH="100vh">
        <Box w={{ base: '90%', [BREAKPOINT]: '58%' }}>
          <Header as="h1" breakpoint={BREAKPOINT}>
            hi, i'm renzo!
          </Header>
          <Box w={{ base: '100%', [BREAKPOINT]: '85%' }} mt="2rem">
            <Paragraph>i write code and music :)</Paragraph>
            <Paragraph>currently i am a</Paragraph>
            <UnorderedList mb="2rem">
              <ListItem>
                <StyledLink
                  color={colors.URBANA_ORANGE}
                  href="https://music.illinois.edu/area/cs-music"
                >
                  cs + music student @ uiuc
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink color="darkblue" href="http://psauiuc.org/">
                  filipino culture night co-coordinator @ psa uiuc
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  color={colors.PRAIRIELEARN_BLUE}
                  href="https://www.prairielearn.org/"
                >
                  undergraduate researcher @ prairielearn
                </StyledLink>
              </ListItem>
            </UnorderedList>

            <Paragraph>
              most recently, i was working as a full-stack software engineering
              intern @{' '}
              <StyledLink
                color={colors.CARGILL_GREEN}
                href="https://researchpark.illinois.edu/tenant_directory/cargill-innovation-lab/"
              >
                cargill
              </StyledLink>
            </Paragraph>
            <Paragraph>
              this website is a WIP. check out my{' '}
              <StyledLink
                color={colors.PRIMARY}
                href="https://www.linkedin.com/in/renzo-marc-ledesma/"
              >
                linkedin
              </StyledLink>{' '}
              and{' '}
              <StyledLink
                color={colors.PRIMARY}
                href="https://github.com/renzol2"
              >
                github
              </StyledLink>{' '}
              instead.
            </Paragraph>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
