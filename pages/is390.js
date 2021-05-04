import {
  Box,
  Center,
  Code,
  Divider,
  Heading,
  Link,
  Text,
} from '@chakra-ui/layout';
import HeroRatioGraph from '../components/HeroRatioGraph';
import HeroNeutralRatioGraph from '../components/HeroNeutralRatioGraph';
import RacialDiversityGraph from '../components/RacialDiversityGraph';

export default function IS390() {
  return (
    <Box w="100%">
      <Box my="2%" mx="25%">
        <Heading as="h1" textAlign="left" fontWeight="black" fontSize="6xl">
          The State of Asian Superheroes in Comics
        </Heading>
        <Text as="h2" fontWeight="hairline" my={3}>
          <font style={{ fontWeight: 'normal' }}>Renzo Ledesma</font> | IS 390
          Independent Research Project
        </Text>
        <Divider mb="7%" mt="2%" />

        <Heading as="h3" fontWeight="bold">
          Motivation
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          Proper representation of marginalized groups in comics has been a core
          subject of this course, and I wanted to try applying some of my
          technical skills to the topic by creating some data visualizations
          regarding Asian characters in superhero comics.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          This project is essentially a rip-off of{' '}
          <Link
            as="a"
            target="_blank"
            href="http://ritvikmath.com/BlackCharactersInComics/"
            color="blueviolet"
          >
            this article by Ritvik Kharkar about this same exact topic but for
            Black characters in superhero comics.
          </Link>{' '}
          However, seeing as Kharkar wrote the original article surrounding the
          start of Black History Month and the release of Marvel's Black Panther
          movie, this project is a perfect introduction to the start of AAPI
          Heritage Month (which I totally planned.)
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Let's start with the data! 🦸‍♀️
        </Text>

        <Heading as="h3" fontWeight="bold" mt="4%">
          Data
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          The bulk of the data was gathered from{' '}
          <Link
            as="a"
            target="_blank"
            href="https://www.kaggle.com/fivethirtyeight/fivethirtyeight-comic-characters-dataset"
            color="blueviolet"
          >
            FiveThirtyEight's Comic Characters Dataset
          </Link>
          , which tackled disparities in gender between different superhero
          comics. While this dataset provided useful information, such as
          character alignment (being good/neutral/bad), it didn't offer any
          information on race. Therefore, I had to fetch that data elsewhere.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          I resorted to using{' '}
          <Link
            as="a"
            target="_blank"
            href="https://en.wikipedia.org/wiki/List_of_Asian_superheroes"
            color="blueviolet"
          >
            Wikipedia(🤢) for its comprehensive list of Asian superheroes
          </Link>
          , which included both DC and Marvel superheroes that I trusted were
          also in the FiveThirtyEight dataset. With my basic web scraping
          skills, I was able to insert a simple <Code>asian/nonasian</Code>{' '}
          column in the FiveThirtyEight dataset to get enough data to start
          visualizing.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Unlike Kharkar, I am completely new and uncomfortable with both web
          scraping and data science, so learning some skills in both of these
          areas was challenging and resulted in less thorough data than the
          original article. I didn't have a great way to check whether a
          superhero in the Wikipedia list was either DC, Marvel, or neither
          (since that would've involved more heavy web scraping solutions that I
          simply don't understand now). That means I most definitely missed some
          superheroes in my final data, and this is something I can hopefully
          improve on if and when I re-approach this project.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Anyway, here's what I was able to do with the data I gathered!
        </Text>
      </Box>

      <Center h="60vh" my="5%">
        <RacialDiversityGraph />
      </Center>
      <Center h="60vh" my="5%">
        <HeroRatioGraph />
      </Center>
      <Center h="60vh" my="5%">
        <HeroNeutralRatioGraph />
      </Center>
    </Box>
  );
}
