import { Text } from '@chakra-ui/react';

const Paragraph = ({ children }) => (
  <Text mb="1.5rem" fontSize="lg" fontWeight="light" lineHeight="tall">
    {children}
  </Text>
);

export default Paragraph;
