import { request } from './helper'
import { ADMIN } from '../../models/api'

/**
 * API admin functions utilizing helper.js
 */
export const startGame = async () => {
  return await request(ADMIN.start, 'GET'); 
}

export const stopGame = async () => {
  return await request(ADMIN.stop, 'GET');
}

export const resetGame = async () => {
  return await request(ADMIN.reset, 'GET');
}