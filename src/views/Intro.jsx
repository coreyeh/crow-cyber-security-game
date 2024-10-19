import { useEffect } from "react";
import { useView } from "../contexts/ViewContext";

import { socket } from "../server/controllers/websocket/socket";

import { motion } from "framer-motion";
import { AnimateBrandmark } from "../components/vectors/Brandmark";
import { AnimateLogotype } from "../components/vectors/Logotype";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const time = i * 0.25;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", delay: time, duration: 2.5 },
        opacity: { delay: time, duration: 1 }
      }
    }
  }
};

const slide = {
  hidden: { x: '50%', fillOpacity: 0 },
  visible: {
    x: 0,
    fillOpacity: 1,
    transition: {
      type: 'spring',
      delay: 2,
      duration: 1,
    }
  }
};

const fall = {
  hidden: { y: '-50%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 2,
      duration: 1,
    }
  }
};
  
const vanish = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.5,
    }
  }
};

const appear = {
  hidden: { opacity: 0 },
  visible: (i) => {
    return {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        delay: i,
        duration: 0.5,
      }
    }
  }
};

/**
 * Landing page with an animation hook, that also connects to the backend
 */
export default function Intro() {
  const { setView } = useView(0);

  /**
   * Delays a transition to a view
   * @param {String} newView - View to transition to
   */
  const readySetview = (newView) => {
    setTimeout(() => {
      setView(newView);
    }, 5000);
  }

  /**
   * Establishes connection to websocket server, if one is not established, 
   * then goes to the title screen
   */
  useEffect(() => {
    if (socket.connected) {
      readySetview('title');
      return;
    }

    const waitTime = setTimeout(() => {
      setView('fault');
    }, 15000);

    socket.subscribe(() => {
      readySetview('title');
      clearTimeout(waitTime);

      socket.unsubscribeAll();
    })
    socket.connect();

    return () => clearTimeout(waitTime);
  }, [])
  
  return (
    <motion.main 
      className="flex flex-col items-center gap-8 h-full min-h-[36rem] py-12"
      initial='visible'
      exit='hidden'
      variants={vanish}
    >
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-center items-center max-w-xs md:max-w-4xl w-full">
        <AnimateLogotype
          initial='hidden'
          animate='visible'
          svgVariants={slide}
          pathVariants={draw}
        />
        <AnimateBrandmark 
          initial='hidden'
          animate='visible'
          svgVariants={fall}
        />
      </div>
      <motion.section 
        className="flex flex-col-reverse justify-center items-center gap-4 w-full h-24"
        initial='hidden'
        animate='visible'
        variants={appear}
        custom={4}
      >
        <motion.h4 
          className="font-game capitalize text-xl"
          initial='hidden'
          animate='visible'
          variants={appear}
          custom={1}
        >
          a cyber security game
        </motion.h4>
      </motion.section>
    </motion.main>
  );
}