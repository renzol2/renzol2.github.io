import { Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FadingComponent from './FadingComponent';
const MotionHeading = motion.custom(Heading);

export default function AnimatedTitle() {
  return (
    <MotionHeading
      fontWeight="400"
      fontSize={['30px', '50px', '90px']}
      color="white"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      drag="x"
      dragMomentum={true}
      dragConstraints={{ left: 0, right: 0 }}
      textShadow="2px 8px black"
      textAlign="center"
    >
      {/* Name */}
      <FadingComponent hiddenScale={0.5} delay={0.5}>
        <Text>
          👋, 🌎! <br /> I'm <b>Renzo Ledesma</b>
          {/* Pronouns */}
          <Text textShadow="none" fontSize={['10px', '20px', '30px']}>
            (he/him)
          </Text>
        </Text>
      </FadingComponent>

      {/* Subtitle */}
      <FadingComponent delay={0.75}>
        <Text
          fontSize={['15px', '20px', '30px']}
          textAlign="center"
          color={'lightgrey'}
          textShadow="1px 3px black"
          pt={3}
        >
          I'm a CS💻 + Music🎼 student @ Illinois who likes building websites
          and making music!
        </Text>
      </FadingComponent>
    </MotionHeading>
  );
}
