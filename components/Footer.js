import { Center, Text } from '@chakra-ui/react';
import colors from '../styles/colors';

export default function Footer() {
  return (
    <Center py={50} backgroundColor={colors.MAGENTA_DARK}>
      <Text fontWeight="light" color="white">© {new Date().getFullYear()} Renzo Ledesma</Text>
    </Center>
  );
}
