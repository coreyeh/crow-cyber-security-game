import { SOCKET, MESSAGES } from "../../models/websocket"

/**
 * Manages the flow of communications in a WebSocket connection
 * 
 * Utilizes a subscription pattern, where you indicate (subscribe) functions that should
 * receive incoming data from the server
 */
class WebSocketService {
  constructor() {
    this.url = SOCKET.url;
    this.connection = null;
    this.connected = false;
    this.subscribers = [];
  }

  /**
   * Establish a connection with the server, if there isn't one
   * and setup communication listeners
   */
  connect() {
    if (this.connected) {
      console.warn("[WebSocket] Connection attempt was made with one already established");
      return;
    }
    this.connection = new WebSocket(this.url);

    /**
     * Switches connection status to true
     */
    this.connection.onopen = () => {
      console.log("[WebSocket] Connected");

      this.connected = true;
      // this.heartbeat();

      this.subscribers.forEach(callback => callback());
    }

    /**
     * Formats received data to JSON and sends to all subscribers
     */
    this.connection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.subscribers.forEach((callback) => callback(data));

      console.log('[WebSocket] Received:\n', data);
    }

    /**
     * Switches connection status to false and attempts reconnection
     * in case of a disrupted network
     */
    this.connection.onclose = () => {
      console.log('[WebSocket] Disconnected');
      
      this.connected = false;
      clearInterval(this.heartbeatInterval);
    }    

    /**
     * Logs an error indicating something has gone wrong in a request
     */
    this.connection.onerror = (error) => {
      console.error("[WebSocket]", error);
    }
  }

  /**
   * Closes connection with the server, if there is one
   */
  disconnect() {
    if (!this.connected) {
      console.warn("[WebSocket] Disconnection attempt was made with no established connection");
      return;
    }
    this.connection.close();

    this.connection = null; 
    this.connected = false;
  }

  /**
   * Regularly sends packets to keep the connection alive, mitigating
   * silent drops from idle/broken connections
   */
  heartbeat() {
    this.heartbeatInterval = setInterval(() => {
        this.send(MESSAGES.heartbeat);
    }, SOCKET.heartbeatInterval);
  }

  /**
   * Adds a function to receive the data and be executed on incoming
   * server responses
   * @param {Function} callback 
   */
  subscribe(callback) {
    this.subscribers.push(callback);
  }

  /**
   * remove a function to stop receiving data and being executed on
   * incoming server responses
   * @param {Function} callback 
   */
  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  }

  /**
   * Removes all functions that are receiving data and being executed on
   * incoming server responses
   */
  unsubscribeAll() {
    this.subscribers = [];
  }

  /**
   * Sends JSON requests to the websocket server
   * @param {JSON} data 
   */
  send(data) {
    if (!this.connected) {
      console.error("[WebSocket] Message attempt was made with no connection established");
      return;
    } 
    this.connection.send(JSON.stringify(data));
  }
}

export const socket = new WebSocketService();