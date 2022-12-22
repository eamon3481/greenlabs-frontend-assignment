import { useQueryClient } from "@tanstack/react-query";
import { GetFarmListResponseType } from "apis";
import { getQueryKey } from "queries";

const useActiveHouse = () => {
  const queryClient = useQueryClient();

  const activeHouse = (farmId: number, houseId: number) => {
    queryClient.setQueryData<GetFarmListResponseType>(
      getQueryKey("FARMS"),
      (prevFarms) => {
        if (!prevFarms) return prevFarms;

        const newFarms = prevFarms.farms.map((farm) => {
          if (farm.id === farmId && farm.houses) {
            return {
              ...farm,
              houses: farm.houses.map((house) => {
                if (house.id === houseId) {
                  return {
                    ...house,
                    active: !house.active,
                  };
                }
                return house;
              }),
            };
          }
          return farm;
        });

        return { farms: newFarms };
      }
    );
  };

  return { activeHouse };
};

export default useActiveHouse;
