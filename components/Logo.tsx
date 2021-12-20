import { Box, Spacer, Text } from '@chakra-ui/layout';
import colors from '../styles/colors';
import DarkModeSwitch from './DarkModeSwitch';

const Logo = () => {
  return (
    <Box
      pt="1rem"
      pl="1rem"
      pos={{ base: 'relative', md: 'fixed' }}
      mb={{ base: '2rem', md: '0' }}
      w="100%"
      display="flex"
      alignItems="center"
    >
      <Text fontSize="2rem">
        😴
      </Text>
      <Spacer />
      <DarkModeSwitch fixed={false} />
    </Box>
  );
};

export default Logo;
