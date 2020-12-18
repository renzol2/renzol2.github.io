import { Divider, Heading, Stack } from '@chakra-ui/react';

export default function LandingHeader({ children }) {
  return (
    <Stack dir="column">
      <Heading textAlign="center" fontFamily="monospace">
        {children}
      </Heading>
      <Divider />
    </Stack>
  );
}
