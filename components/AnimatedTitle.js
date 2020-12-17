import { Heading, Text, chakra, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FadingComponent from './FadingComponent';
const MotionHeading = chakra(motion.custom(Heading));

export default function AnimatedTitle() {
  return (
    <MotionHeading
      fontWeight="normal"
      fontSize={['30px', '50px', '90px']}
      color="white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      textAlign={['center', 'left']}
    >
      {/* Name */}
      <FadingComponent hiddenScale={0.5} delay={0.5}>
        👋, 🌎! <br /> I'm <b>Renzo Ledesma</b>
        {/* Pronouns */}
        <Text
          textShadow="none"
          fontSize={['10px', '20px', '30px']}
          fontStyle="italic"
        >
          (he/him)
        </Text>
        <Divider py={[1, 3]} />
      </FadingComponent>

      {/* Subtitle */}
      <FadingComponent delay={0.75}>
        <Text
          fontSize={['15px', '20px', '30px']}
          fontWeight="light"
          color="whitesmoke"
          pt={3}
        >
          I'm a CS💻 + Music🎼 student @ UIUC. 🧡Building websites and
          making music!
        </Text>
      </FadingComponent>
    </MotionHeading>
  );
}
