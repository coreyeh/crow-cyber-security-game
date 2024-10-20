import { motion } from "framer-motion";

/**
 * Organization brandmark with framer-motion animation support
 */
export function AnimateBrandmark({ className, pathName, initial, animate, exit, svgVariants, pathVariants }) {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="62 84 900 600" 
      fill="none"
      id="animateBrandmark"
      className={className}
      role="img"
      aria-label="crow"
      initial={initial}
      animate={animate}
      exit={exit}
      variants={svgVariants}
    >
      <motion.path 
        d="M509.477 566H514.523L568 524.661V519.62L529.658 444H494.342L456 519.62V524.661L509.477 566Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1} 
      />
      <motion.path 
        d="M153.003 320H469L457.965 376.5L435.896 442L430.88 445H428.873L152 327L153.003 320Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={0.5} 
      />
      <motion.path 
        d="M870.997 320H554L566.038 378L587.104 441L592.12 445H594.126L872 327L870.997 320Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1.5} 
      />
      <motion.path 
        d="M494.336 440.988V444H529.664V440.988L566 377.726L553.888 318.481L515.533 202H508.467L469.103 318.481L458 377.726L494.336 440.988Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1} 
      />
    </motion.svg>
  );
}

/**
 * Organization brandmark 
 */
export function Brandmark({ className, pathName }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1024 768" 
      fill="none"
      id="brandmark"
      className={className}
      role="img"
      aria-label="crow"
    >
      <path 
        d="M509.477 566H514.523L568 524.661V519.62L529.658 444H494.342L456 519.62V524.661L509.477 566Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9" 
      />
      <path 
        d="M153.003 320H469L457.965 376.5L435.896 442L430.88 445H428.873L152 327L153.003 320Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9" 
      />
      <path 
        d="M870.997 320H554L566.038 378L587.104 441L592.12 445H594.126L872 327L870.997 320Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9" 
      />
      <path 
        d="M494.336 440.988V444H529.664V440.988L566 377.726L553.888 318.481L515.533 202H508.467L469.103 318.481L458 377.726L494.336 440.988Z" 
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9" 
      />
    </svg>
  );
}