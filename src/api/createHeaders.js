import { APPLICATION_JSON, CONTENT_TYPE } from "constants/headers";

export default function createHeaders(init) {
  const headers = new Headers(init);

  if (!headers.has(CONTENT_TYPE)) {
    headers.set(CONTENT_TYPE, APPLICATION_JSON);
  }

  return headers;
}
