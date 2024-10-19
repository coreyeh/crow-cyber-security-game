import { motion } from "framer-motion";

/**
 * Organization logotype with framer-motion animation support
 */
export function AnimateLogotype({ className, pathName, initial, animate, exit, svgVariants, pathVariants }) {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/motion.svg" 
      viewBox="62 204 900 360" 
      fill="none"
      id="animateLogotype"
      className={className}
      role="img"
      aria-label='CROW'
      initial={initial}
      animate={animate}
      exit={exit}
      variants={svgVariants}
    >
      <motion.path
        d="M314 366.261L325 355.42L285 316H237L192 360.348V407.652L237 452H284L324 412.58L314 402.725L278 438.203H244L206 400.754V367.246L243 330.783H278L314 366.261Z"
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={0.5}
      />
      <motion.path
        d="M432 404.696L480 452L491 441.159L454 404.696V403.71L494 364.29V363.304L446 316H398L353 360.348V407.652L398 452L408.5 441.652L368 401.739V366.261L404 330.783H440L473 363.304V364.29L432 404.696Z"
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1}
      />
      <motion.path
        d="M535.537 401.739L572.595 438.203H606.648L625.678 419.478L636.194 429.826L613.659 452H565.584L520.513 407.652V360.348L543.049 338.174L554.066 349.014L535.537 367.246V401.739Z"
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1.5}
      />
      <motion.path
        d="M543.049 338.174L554.066 349.014L572.595 330.783H607.649L644.707 367.246V400.754L625.678 419.478L636.194 429.826L658.729 407.652V360.348L613.659 316H565.584L543.049 338.174Z"
        fill="#D9D9D9"
        className={pathName}
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={1.5}
      />
      <motion.path
        d="M708 318H694V407.662L739 452L749.5 441.654L708 400.765V318Z"
        fill="#D9D9D9"
        className={pathName}
        variants={pathVariants}
        custom={2}
      />
      <motion.path
        d="M770 400.765H756V331.794H770V400.765Z"
        fill="#D9D9D9"
        className={pathName}
        variants={pathVariants}
        custom={2.5}
      />
      <motion.path
        d="M787.5 451.507L777 441.162L818 400.765V318H832V407.662L787.5 451.507Z"
        fill="#D9D9D9"
        className={pathName}
        variants={pathVariants}
        custom={3}
      />
      <motion.path
        d="M708 318H694V407.662L739 452L749.5 441.654L708 400.765V318Z"
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={2}
      />
      <motion.path
        d="M770 400.765H756V331.794H770V400.765Z"
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={2.5}
      />
      <motion.path
        d="M787.5 451.507L777 441.162L818 400.765V318H832V407.662L787.5 451.507Z"
        stroke="#D9D9D9"
        variants={pathVariants}
        custom={3}
      />  
    </motion.svg>
  );
}

/**
 * Organization logotype
 */
export function LogoType({ className, pathName }) {
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="62 204 900 360" 
    fill="none"
    id="logotype"
    className={className}
    role="img"
    aria-label='CROW'
  >
    <path 
      d="M314 366.261L325 355.42L285 316H237L192 360.348V407.652L237 452H284L324 412.58L314 402.725L278 438.203H244L206 400.754V367.246L243 330.783H278L314 366.261Z" 
      fill="#D9D9D9"
      className={pathName} 
      stroke="#D9D9D9" 
    />
    <path 
      d="M432 404.696L480 452L491 441.159L454 404.696V403.71L494 364.29V363.304L446 316H398L353 360.348V407.652L398 452L408.5 441.652L368 401.739V366.261L404 330.783H440L473 363.304V364.29L432 404.696Z" 
      fill="#D9D9D9"
      className={pathName} 
      stroke="#D9D9D9" 
    />
    <path 
      d="M535.537 401.739L572.595 438.203H606.648L625.678 419.478L636.194 429.826L613.659 452H565.584L520.513 407.652V360.348L543.049 338.174L554.066 349.014L535.537 367.246V401.739Z" 
      fill="#D9D9D9"
      className={pathName} 
      stroke="#D9D9D9" 
    />
    <path 
      d="M543.049 338.174L554.066 349.014L572.595 330.783H607.649L644.707 367.246V400.754L625.678 419.478L636.194 429.826L658.729 407.652V360.348L613.659 316H565.584L543.049 338.174Z" 
      fill="#D9D9D9"
      className={pathName} 
      stroke="#D9D9D9" 
    />
    <path 
      d="M708 318H694V407.662L739 452L749.5 441.654L708 400.765V318Z" 
      fill="#D9D9D9"
      className={pathName} 
    />
    <path 
      d="M770 400.765H756V331.794H770V400.765Z" 
      fill="#D9D9D9"
      className={pathName} 
    />
    <path 
      d="M787.5 451.507L777 441.162L818 400.765V318H832V407.662L787.5 451.507Z" 
      fill="#D9D9D9"
      className={pathName} 
    />
    <path 
      d="M708 318H694V407.662L739 452L749.5 441.654L708 400.765V318Z" 
      stroke="#D9D9D9" 
      className={pathName}
    />
    <path 
      d="M770 400.765H756V331.794H770V400.765Z" 
      stroke="#D9D9D9"
      className={pathName} 
    />
    <path 
      d="M787.5 451.507L777 441.162L818 400.765V318H832V407.662L787.5 451.507Z" 
      stroke="#D9D9D9"
      className={pathName} 
    />
  </svg>
}