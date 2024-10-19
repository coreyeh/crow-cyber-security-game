const BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * API admin request URLs
 */
export const ADMIN = {
  start: `${BASE_URL}/startGame`,
  stop: `${BASE_URL}/stopGame`,
  reset: `${BASE_URL}/resetGame`,
};

/**
 * API user request URLs
 */
export const USER = {
  play: `${BASE_URL}/play`,
  selectControls: `${BASE_URL}/select_controls`,
  requestBudget: `${BASE_URL}/request_budget`,
  getUserStats: `${BASE_URL}/getUserStats`,
  specialProject: `${BASE_URL}/specialProject`,
  situation: `${BASE_URL}/situation`,
};

/**
 * API request default values
 */
export const REQUEST = {
  contentType: "application/json",
};