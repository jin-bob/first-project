import createHeaders from "./createHeaders";
import createBody from "./createBody";
import { CONTENT_TYPE } from "../constants/headers";

/**
 * @callback CreateMethod
 * @param {RequestInfo} endpoint
 * @param {RequestInit} [options]
 * @param {"json" | "blob" | "text" | "document"} [responseParse=json]
 */

/**
 * @type {CreateMethod}
 * */

async function client(
  endpoint,
  { body, method, headers: initHeaders, ...rest },
  responseParse = "json",
) {
  const headers = createHeaders(initHeaders);

  const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    method,
    headers,
    body: createBody({ body, contentType: headers.get(CONTENT_TYPE) }),
    ...rest,
  });

  if (response.ok) return response[responseParse]?.();

  if (response.status === 502) {
    throw new Error("502 Bad Gateway");
  }

  if (response.status === 504) {
    throw new Error("504 Gateway Timeout");
  }

  const parsedResponse = await response.json();

  throw new Error(parsedResponse.message);
}

/**
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} method
 *
 * @return CreateMethod
 * * */
const createMethod = (method) => (url, options, responseParse) =>
  client(url, { method, ...options }, responseParse);

export default {
  get: createMethod("GET"),
  post: createMethod("POST"),
  put: createMethod("PUT"),
  patch: createMethod("PATCH"),
  delete: createMethod("DELETE"),
};
