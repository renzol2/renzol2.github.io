import { Heading } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/system';
import colors from '../styles/colors';

const Header = ({ breakpoint, as, children }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Heading
      as={as}
      fontSize={{ base: '4rem', [breakpoint]: '6rem' }}
      lineHeight="3.4rem"
      fontWeight="black"
      color={isDark ? 'pink.100' : 'black'}
    >
      {children}
    </Heading>
  );
};

export default Header;
