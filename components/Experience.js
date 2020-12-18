import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Center,
  Divider,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import colors from '../styles/colors';
import LandingHeader from './LandingHeader';
import { useState } from 'react';
import experiences from '../constants/experiences';
import ExperienceDescription from './ExperienceDescription';

export default function Experience() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [experience, setExperience] = useState(experiences[0]);
  return (
    <Box w="100%" pb="10vh">
      {/* Header */}
      <Center w="100%" h="100px">
        <LandingHeader>Experience</LandingHeader>
      </Center>

      {/* Two column layout */}
      {!isMobile && (
        <Grid
          p={10}
          mx={['1%', '15%']}
          minH={'50vh'}
          templateColumns={['100%', '30% 70%']}
          borderRadius={50}
        >
          {/* Buttons */}
          <Stack
            direction={['column']}
            borderRightWidth={('0px', '2px')}
            h="100%"
          >
            {experiences.map((exp) => (
              <Button
                backgroundColor={
                  exp === experience ? colors.MAGENTA : colors.PURPLE
                }
                borderColor={colors.PURPLE}
                mr={4}
                size="lg"
                fontFamily="monospace"
                textAlign="left"
                _hover={{
                  backgroundColor: colors.MAGENTA_LIGHT,
                }}
                onClick={() => {
                  console.log(isMobile);
                  setExperience(exp);
                }}
              >
                {exp.orgAbbrev}
              </Button>
            ))}
          </Stack>

          {/* Information */}
          <ExperienceDescription experience={experience} />
        </Grid>
      )}

      {/* Mobile layout (tabs) */}
      {isMobile && (
        <Tabs>
          <TabList>
            {experiences.map((exp) => (
              <Tab fontFamily="monospace">{exp.orgAbbrev}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {experiences.map((exp) => (
              <TabPanel>
                <ExperienceDescription experience={exp} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
}
