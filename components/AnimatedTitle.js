import { Heading, Text, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FadingComponent from './FadingComponent';
const MotionHeading = chakra(motion.custom(Heading));

export default function AnimatedTitle() {
  return (
    <MotionHeading
      fontWeight="400"
      fontSize={['30px', '50px', '90px']}
      color="white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      textAlign={['center', 'left']}
    >
      {/* Name */}
      <FadingComponent hiddenScale={0.5} delay={0.5}>
        👋, 🌎! <br /> i'm <b>renzo ledesma</b>
        {/* Pronouns */}
        <Text textShadow="none" fontSize={['10px', '20px', '30px']} fontStyle="italic">
          (he/him)
        </Text>
      </FadingComponent>

      {/* Subtitle */}
      <FadingComponent delay={0.75}>
        <Text
          fontSize={['15px', '20px', '30px']}
          color="whitesmoke"
          pt={3}
        >
          i'm a cs💻 + music🎼 student @ uiuc who likes building websites
          and making music!
        </Text>
      </FadingComponent>
    </MotionHeading>
  );
}
