import { Flex, Heading } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import NavBar from '../components/NavBar';

const MotionHeading = motion.custom(Heading);

export default function Home() {
  return (
    <div>
      <NavBar />
      <Flex justifyContent="center" overflow="hidden">
        <MotionHeading
          fontWeight="400"
          fontSize={['20px', '100px']}
          color="white"
          my="280px"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          drag="x"
          dragMomentum={false}
          dragConstraints={{ left: 0, right: 0 }}
          textShadow="2px 8px black"
        >
          👋, 🌎! My name is <b>Renzo.</b>
        </MotionHeading>
      </Flex>
    </div>
  );
}
