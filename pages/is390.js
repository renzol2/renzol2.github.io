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
import { Image } from '@chakra-ui/image';
import Footer from '../components/Footer';

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
          Also, an additional disclaimer about the data that I'll take straight
          from Kharkar:
        </Text>
        <Text as="p" fontSize="lg" my={2} fontWeight="hairline">
          Just to point out one known source of error, comic books constantly
          write and rewrite characters as well as pass on the mantle of one
          superhero/supervillain to another character. Sometimes, a hero will
          originally be written as white and many decades later will be
          rewritten as black, for example. When scraping the wiki page for that
          character, it is possible that the original publication date will be
          fetched instead of the rewriting date. All this is to say, note that
          there will be minor errors although I have tried my best to maintain
          the accuracy of the scraped data.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Anyway, here's what I was able to do with the data I gathered!
        </Text>

        <Heading as="h3" fontWeight="bold" my="4%">
          How Has Racial Diversity in Comics Changed Through Time?
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          I essentially did the same graphs that Kharkar did but with Asian
          superheroes. I'm not confident that this "racial diversity score" is
          the best measurement of diversity in comics, but for the sake of
          consistency, I'll use the same scoring system that he uses, shown
          below:
        </Text>
        <Center w="100%" my="2%">
          <Image
            alt="Racial diversity"
            src="images/racial_diversity.png"
            boxSize={600}
            objectFit="cover"
          />
        </Center>
        <Text as="p" fontSize="lg" my={2}>
          And shown below is the graph with my data:
        </Text>
      </Box>

      <Heading textAlign="center" fontWeight="hairline" fontSize="3xl" mt="3%">
        Racial Diversity Over the Years (Asian superheroes)
      </Heading>
      <Center h="60vh" mb="5%">
        <RacialDiversityGraph />
      </Center>

      <Box my="2%" mx="25%">
        <Text as="p" fontSize="lg" my={2}>
          Unlike Kharkar's graph, superheroes did not see any significant rise
          in representation of Asian characters, and the percentage of Asian to
          non-Asian superheroes has remained consistently very small. I do think
          this is partly or mostly attributed to my lack of thorough data, and
          with a more well-scraped dataset, the racial diversity score would
          likely rise at least a bit more similarly to Kharkar's graph.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Interestingly, the spike at 1938 for DC characters is likely caused by
          the character{' '}
          <Link
            as="a"
            href="https://dc.fandom.com/wiki/Wing_How_(New_Earth)"
            target="_blank"
            color="blueviolet"
          >
            Wing How
          </Link>
          , a Chinese immigrant who moved to America to escape Japanese
          persecution before World War II and joined as a
          chaffeur/crime-fighting companion to the Crimson Avenger. He first
          appeared in Detective Comics #20, part of{' '}
          <font style={{ fontStyle: 'italic' }}>
            Detective Comics (Volume 1)
          </font>
          , issued in October 1938.
        </Text>
        <Center w="100%" my="2%">
          <Image
            alt="Wing How"
            src="images/wing_how.jpg"
            boxSize={400}
            objectFit="cover"
          />
        </Center>

        <Heading as="h3" fontWeight="bold" my="4%">
          Are Asian Characters Represented as Heroes or Villains?
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          Moving past just diversity, Kharkar also analyzed the alignment of
          Black superhero characters and how they were portrayed in superhero
          stories. Those original results seem to imply that there was a binary
          selection between good/bad, but the FiveThirtyEight dataset had a
          good/neutral/bad alignment selection, so I decided to make two graphs:
          one graph for the ratio between just good characters to total
          characters as the years go by (for both all superheroes and all Asian
          superheroes), and then another graph with both good AND neutral
          characters against the total number of characters (also for all
          superheroes and all Asian superheroes).
        </Text>
      </Box>

      <Heading textAlign="center" fontWeight="hairline" fontSize="3xl" mt="2%">
        Ratio of # of Good Characters to Total # of Characters
      </Heading>
      <Center h="50vh">
        <HeroRatioGraph />
      </Center>
      <Heading textAlign="center" fontWeight="hairline" fontSize="3xl" mt="2%">
        Ratio of # of Good+Neutral Characters to Total # of Characters
      </Heading>
      <Center h="50vh">
        <HeroNeutralRatioGraph />
      </Center>

      <Box my="2%" mx="25%">
        <Text as="p" fontSize="lg" my={2}>
          Just like Black superheroes, Asian superheroes tend to be above the
          ratio for all superheroes, at least nowadays. Funnily enough, the dip
          in the late 1960s/early 1970s is actually a data mistake. The
          Wikipedia list for Marvel superheroes lists Wave, the upcoming
          Filipina(woo!) superhero. However, since I naively just checked if any
          Marvel superheroes had the word 'Wave' in their name, this also
          snagged the villains Crime-Wave and his agent Torpedo (Agent of
          Crime-Wave), who I don't believe are delineated as being Asian at all.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Another mistake is the Mandarin's Robotic Hulk, who's listed as{' '}
          <Code>Robert Bruce Banner (Mandarin Robot) (Earth-616)</Code> and was
          caught under the Mandarin's name. All three of these characters first
          debuted in 1969, which led to that little dip. In the mid 1970s,
          however, the influx of more good-aligned Asian superheroes caused the
          ratio to rise in both graphs.
        </Text>

        <Heading as="h3" fontWeight="bold" my="4%">
          Wrapping Up
        </Heading>
        <Text as="p" fontSize="lg" my={2}>
          Despite my faulty data science skills, my conclusions fall quite
          similarly to Ritvik Kharkar's. The good news is that, like in most
          media, racial diversity is slowly and steadily increasing, and that
          both Asian and Black superheroes are written as heroes in comics
          rather than villains (though that isn't necessarily a good or bad
          thing - this statistic requires much more close-reading and nuance of
          the actual source material).
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Despite a steady increase in representation of characters, it often
          does not match up with the actual production and industry behind
          comics. More Asian and BIPOC writers, artists, and creators need the
          space to tell their own stories, and representation within the
          industry is a much more institutional issue that won't be solved
          overnight.
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          Still, progress is progress - quoting from Kharkar:
          <Text fontWeight="hairline">
            we need to applaud and support racial diversity in comics in any way
            it may manifest, especially with an increasing number of film and TV
            adaptations.
          </Text>
        </Text>
        <Text as="p" fontSize="lg" my={2}>
          As time goes on, I hope that AAPI, BIPOC, LGTBQ+, and other
          marginalized groups can find a space within the comics universe, both
          in the stories and characters we hold dear to our hearts as well as in
          the positions of writers, artists, creators, designers, and
          storytellers who create those beloved characters.
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}
