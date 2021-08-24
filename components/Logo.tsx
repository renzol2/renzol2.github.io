import { Box, Spacer, Text } from '@chakra-ui/layout';
import colors from '../styles/colors';
import DarkModeSwitch from './DarkModeSwitch';

const Logo = () => {
  return (
    <Box
      pt="1rem"
      pl="1rem"
      pos="absolute"
      w="100%"
      display="flex"
      alignItems="center"
    >
      <Text fontSize="3rem">
        <span
          style={{ fontWeight: 'bolder', color: colors.PRIMARY }}
        >{`{`}</span>
        <span style={{ fontWeight: 'lighter' }}>RL</span>
        <span
          style={{ fontWeight: 'bolder', color: colors.PRIMARY }}
        >{`}`}</span>
      </Text>
      <Spacer />
      <DarkModeSwitch fixed={false} />
    </Box>
  );
};

export default Logo;
