import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import colors from '../styles/colors';

export default function ExperienceDescription({ experience }) {
  return (
    <Box pl={5}>
      <Heading fontSize={{ base: 'md', md: '2xl'}} py={2}>
        <span style={{ color: colors.PURPLE_EXTRA_LIGHT }}>
          {experience.role}
        </span>{' '}
        | {experience.org}
      </Heading>
      <Text fontFamily="monospace" fontStyle="italic" pb={2}>
        {experience.startDate} - {experience.endDate}
      </Text>
      <Text fontWeight="light" fontSize={{ base: 'md', md: 'lg'}}>
        <UnorderedList>
          {experience.bullets.map((e) => (
            <ListItem key={e}>{e}</ListItem>
          ))}
        </UnorderedList>
      </Text>
    </Box>
  );
}
