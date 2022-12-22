import axios, { AxiosError, AxiosResponse } from "axios";
const BASE_URL = "http://localhost:3000/";

const API = axios.create({
  timeout: 2000,
  baseURL: BASE_URL,
});

const call = async <T>(caller: () => Promise<AxiosResponse<T>>) => {
  try {
    const { data } = await caller();
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new AxiosError("Axios Error: " + error.message);
    }
    throw new AxiosError("unExpected error");
  }
};

export { API, call };
