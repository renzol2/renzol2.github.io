import { Heading, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import FadingComponent from './FadingComponent';
const MotionHeading = motion.custom(Heading);

export default function AnimatedTitle() {
  return (
    <MotionHeading
      fontWeight="400"
      fontSize={['30px', '40px', '110px']}
      color="white"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      drag="x"
      dragMomentum={false}
      dragConstraints={{ left: 0, right: 0 }}
      textShadow="2px 8px black"
      textAlign="center"
    >
      <FadingComponent hiddenScale={0.5} delay={0.5}>
        👋, 🌎! <br /> I'm <b>Renzo Ledesma</b>
      </FadingComponent>
      <FadingComponent delay={0.75}>
        <Text
          fontSize={['20px', '30px', '50px']}
          textAlign="center"
          color={'lightgrey'}
          textShadow="1px 3px black"
        >
          CS + Music @ Illinois
        </Text>
      </FadingComponent>
    </MotionHeading>
  );
}
