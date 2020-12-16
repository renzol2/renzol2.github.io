import { motion } from 'framer-motion';

export default function FadingComponent({
  children,
  hiddenScale = 0.8,
  visibleScale = 1,
  delay = 0.4,
}) {
  return (
    <motion.div
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
    </motion.div>
  );
}
