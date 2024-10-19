import { request } from "./helper"
import { USER } from "../../models/api"

/**
 * API user functions utilizing helper.js
 */
export const playGame = async () => {
  return await request(USER.play, 'GET');
};

export const selectControl = async (controlName) => {
  const url = `${USER.selectControls}?controls=${encodeURIComponent(controlName)}`;
  return await request(url, 'GET');
};

export const requestBudget = async () => {
  return await request(USER.requestBudget, 'GET');
}

export const getUserStats = async () => {
  return await request(USER.getUserStats, 'GET');
}

export const specialProject = async (projectName) => {
  const url = `${USER.specialProject}?project=${encodeURIComponent(projectName)}`;
  return await request(url, 'GET');
}

export const handleSituation = async (situationOption) => {
  const url = `${USER.situation}?situation=${encodeURIComponent(situationOption)}`;
  return await request(url, 'GET');
}