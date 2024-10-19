import { REQUEST } from "../../models/api"

/**
 * Sends requests to the API, returning the response
 * 
 * This is not intended to be called directly by components, but to be used by other API controllers,
 * See admin.js and user.js as example controllers
 * 
 * @param {String} url - API request url
 * @param {String} method - API request type (GET, POST, etc...)
 * @param {JSON} body - API request content
 * 
 * @returns API response in JSON format
 */
export const request = async (url, method, body=null) => {
  const options = {
    method,
    headers: {
      'Content-Type': REQUEST.contentType
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`(${response.status}) ${response.statusText}`);
    }
    return await response.json();
  }
  catch (error) {
    console.error("[API]", error);
    throw(error);
  }
}