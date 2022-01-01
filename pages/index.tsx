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
            <Paragraph>
              this website is currently a placeholder. you can view my work on
              my{' '}
              <StyledLink
                href="https://www.renzomledesma.me/"
                color={colors.PRIMARY}
              >
                portfolio site
              </StyledLink>
              . thanks and have a great day! 😌
            </Paragraph>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
