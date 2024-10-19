import { useEffect } from "react"
import { useView } from "./contexts/ViewContext"

import { AnimatePresence, motion } from "framer-motion"

import Intro from "./views/Intro"
import Title from "./views/Title"
import Prologue from "./views/Prologue"
import Game from "./views/Game"
import Epilogue from "./views/Epilogue"
import Fault from "./views/Fault"

/**
 * Manages the main game view that is presented to the user, such as
 * the titlescreen, prologue, main game.
 */
export default function App() {
  const { view, setView } = useView(0);

  /**
   * Default to the intro view when opening the website
   */
  useEffect(() => setView('intro'), []);

  const views = {
    intro: <Intro />,
    title: <Title />,
    prologue: <Prologue />,
    game: <Game />,
    epilogue: <Epilogue />,
    fault: <Fault />,
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key={view}
        className="min-h-screen h-screen"
      >
        {views[view] || views['fault']}
      </motion.div>
    </AnimatePresence>
  );
}
