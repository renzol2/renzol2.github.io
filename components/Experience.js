import { useState } from 'react';
import { Box, Button, Grid, Stack, Center, Container } from '@chakra-ui/react';
import colors from '../styles/colors';
import LandingHeader from './LandingHeader';
import experiences from '../constants/experiences';
import ExperienceDescription from './ExperienceDescription';

export default function Experience() {
  const [experience, setExperience] = useState(experiences[0]);

  return (
    <Box w="100%" py="10vh" id="experience">
      {/* Header */}
      <Center w="100%" h="100px">
        <LandingHeader>Experience</LandingHeader>
      </Center>

      {/* Two column desktop layout, one column mobile */}
      <Container minH="50vh" maxW="100%">
        <Grid
          p={{ base: 0, md: 10 }}
          mx={{ base: '1%', md: '15%' }}
          templateColumns={{ base: '100%', md: '30% 70%' }}
          borderRadius={50}
        >
          {/* Buttons */}
          <Stack
            direction={{ base: 'row', md: 'column' }}
            borderRightWidth={{ base: '0px', md: '2px' }}
            borderBottomWidth={{ base: '2px', md: '0px' }}
            // FIXME: hacky way of making right border extend full width on desktop
            minH={{ base: 0, md: '100%' }}
          >
            {experiences.map((exp) => (
              <Button
                backgroundColor={
                  exp === experience ? colors.MAGENTA : colors.PURPLE
                }
                borderColor={colors.PURPLE}
                mr={{ base: 1, md: 4 }}
                size="lg"
                fontFamily="monospace"
                textAlign="left"
                _hover={{
                  backgroundColor: colors.MAGENTA_LIGHT,
                }}
                onClick={() => {
                  setExperience(exp);
                }}
                key={exp.org}
              >
                {exp.orgAbbrev}
              </Button>
            ))}
          </Stack>

          {/* Information */}
          <ExperienceDescription experience={experience} />
        </Grid>
      </Container>
    </Box>
  );
}
