import { FarmsType } from "libs/type";
import { API, call } from "./API";

export const getFarmList = () =>
  call<{ farms: FarmsType[] }>(() => API.get("/api/farm"));
