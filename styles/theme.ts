import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'monospace',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'monospace',
      },
    },
  },
});
export default theme;
