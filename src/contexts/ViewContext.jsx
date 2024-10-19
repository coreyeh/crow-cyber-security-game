import { createContext, useContext, useState } from "react";

export const ViewContext = createContext();

/**
 * Provides view management based on a leveling system, allowing parent components 
 * to control the visible child components at different levels.
 */
export default function ViewProvider({ children }) {
  const [views, setViews] = useState({});
  
  /**
   * Updates the view for a specific level in the view hierarchy.
   *
   * @param {number|string} level - The key representing the level for which the view should be updated.
   * @param {string} newView - The new view or component to display at the given level.
   */
  const setViewAtLevel = (level, newView) => {
    setViews((prevViews) => ({
      ...prevViews,
      [level]: newView,
    }));
  };

  return (
    <ViewContext.Provider value={{
      views,
      setViews,
      setViewAtLevel,
    }}>
      {children}
    </ViewContext.Provider>
  );
}

/**
 * Custom hook to access and update the view for a specific level.
 *
 * @param {number|string} level - The level or key to retrieve the corresponding view.
 */
export const useView = (level) => {
  const { views, setViewAtLevel } = useContext(ViewContext);

  return {
    view: views[level],
    setView: (newView) => setViewAtLevel(level, newView),
  };
};
