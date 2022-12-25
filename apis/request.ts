import { FarmsType } from "libs/type";
import { API, call } from "./API";

export type GetFarmListResponseType = { farms: FarmsType[] };

export const getFarmList = () =>
  call<GetFarmListResponseType>(() => API.get("/api/farm"));

export type AddFarmRequestType = { name: string; crop: string };

export const addFarm = (farm: AddFarmRequestType) =>
  call(() => API.post<{ result: AddFarmRequestType }>("/api/addfarm", farm));
