import { motion } from "framer-motion";

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;