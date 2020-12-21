import {
  Box,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import CardComponent from './CardComponent';

export default function ProjectCard({ project }) {
  const { name, motto, description, link, photo } = project;
  return (
    <CardComponent>
      <Grid templateColumns={['100%', '40% 60%']}>
        <Link href={link} isExternal>
          <Image src={photo} />
        </Link>
        <Box pl={5} pt={2}>
          <Link href={link} isExternal>
            <Heading size="lg">{name}</Heading>
          </Link>
          <Heading size="md" fontWeight="normal" pb={2}>
            {motto}
          </Heading>
          <Text fontWeight="light">{description}</Text>
        </Box>
      </Grid>
    </CardComponent>
  );
}
