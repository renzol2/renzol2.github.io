import { Flex, Heading } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const MotionHeading = motion.custom(Heading);

export default function Home() {
  return (
    <Flex justifyContent="center">
      <MotionHeading
        fontWeight="400"
        fontSize={['20px', '100px']}
        color="white"
        my="300px"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        👋, 🌎! My name is <b>Renzo.</b>
      </MotionHeading>
    </Flex>
  );
}
