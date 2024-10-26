import { APPLICATION_JSON } from "constants/headers";

export default function createBody({ body, contentType }) {
  if (!body) return body;

  if (contentType === APPLICATION_JSON) return JSON.stringify(body);

  return body;
}
