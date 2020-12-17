import { motion } from 'framer-motion';
import { Box, chakra } from '@chakra-ui/react';

const MotionBox = chakra(motion.div);

export default function FadingComponent({
  children,
  hiddenScale = 0.8,
  visibleScale = 1,
  delay = 0.4,
}) {
  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: hiddenScale,
          opacity: 0,
        },
        visible: {
          scale: visibleScale,
          opacity: 1,
          transition: {
            delay: delay,
          },
        },
      }}
    >
      {children}
    </MotionBox>
  );
}
