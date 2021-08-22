import { Center, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Center py={50} backgroundColor="black">
      <Text fontWeight="light" color="white">
        © {new Date().getFullYear()} Renzo Ledesma
      </Text>
    </Center>
  );
}
