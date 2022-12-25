import { useQueryClient } from "@tanstack/react-query";
import { GetFarmListResponseType } from "apis";
import { getQueryKey } from "queries";
import { editArrayDate } from "utils";

const useActiveHouse = () => {
  const queryClient = useQueryClient();

  const activeHouse = (farmId: number, houseId: number) => {
    queryClient.setQueryData<GetFarmListResponseType>(
      getQueryKey("FARMS"),
      (prevFarms) => {
        if (!prevFarms) return prevFarms;

        const newFarms = editArrayDate(
          prevFarms.farms,
          "id",
          farmId,
          (farm) => {
            if (!farm.houses) return farm;
            return {
              ...farm,
              houses: editArrayDate(farm.houses, "id", houseId, (house) => {
                return {
                  ...house,
                  active: !house.active,
                };
              }),
            };
          }
        );

        return { farms: newFarms };
      }
    );
  };

  return { activeHouse };
};

export default useActiveHouse;
