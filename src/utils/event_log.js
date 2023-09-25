import * as Api from "../api";

export function eventLog(logData) {
  console.log(logData);
  return Api.post("/api/event", logData);
}
