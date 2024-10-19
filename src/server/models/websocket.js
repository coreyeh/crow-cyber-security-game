const BASE_URL = import.meta.env.VITE_WEBSOCKET_BASE_URL

/**
 * WebSocket connection configurations
 */
export const SOCKET = {
  url: BASE_URL,
  reconnectDelay: 5000,
  maxReconnectAttempts: 10,
  protocols: [],
  heartbeatInterval: 30000,
};

/**
 * WebSocket connection default values
 */
export const MESSAGES = {
  heartbeat: {
    type: 'ping',
    payload: {},
  },
};