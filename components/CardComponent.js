import { Box } from '@chakra-ui/react';
import colors from '../styles/colors';

export default function CardComponent({ children }) {
  return (
    <Box
      width="100%"
      backgroundColor={colors.MAGENTA_TRANSLUCENT}
      rounded="lg"
      p={[3, 3, 3, 5]}
      my={5}
      boxShadow="md"
    >
      {children}
    </Box>
  );
}
