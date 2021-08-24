import { Heading } from '@chakra-ui/layout';
import colors from '../styles/colors';
import '@fontsource/roboto-mono/700.css';

const Header = ({ breakpoint, as, children }) => {
  return (
    <Heading
      as={as}
      fontSize={{ base: '4rem', [breakpoint]: '6rem' }}
      lineHeight="3.4rem"
      color={colors.PRIMARY}
    >
      {children}
    </Heading>
  );
};

export default Header;
