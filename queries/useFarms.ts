import { useQuery } from "@tanstack/react-query";
import getQueryKey from "./getQueryKey";
import { getFarmList } from "apis";

const useFarms = () => {
  return useQuery(getQueryKey("FARMS"), getFarmList);
};

export default useFarms;
