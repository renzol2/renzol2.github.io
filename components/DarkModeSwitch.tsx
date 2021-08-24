import { useColorMode, Switch } from '@chakra-ui/react';
import colors from '../styles/colors';

const DarkModeSwitch = ({ fixed = true }: { fixed?: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      position={fixed ? 'fixed' : undefined}
      top="1rem"
      right="1rem"
      mr="1rem"
      color={colors.PRIMARY}
      isChecked={isDark}
      onChange={toggleColorMode}
      size="lg"
    />
  );
};

export default DarkModeSwitch;
