import React from "react";
import { useFarms } from "queries";
import { getProductionTotal } from "utils";
import { useActiveHouse } from "hooks";
import FarmList from "./FarmList";

const Farm = () => {
  const { data, isLoading } = useFarms();
  const { activeHouse } = useActiveHouse();

  if (!data || isLoading) return null;

  return (
    <ul className="px-2 flex flex-col gap-2">
      {data.farms.map((farm) => (
        <FarmList
          key={farm.id}
          {...farm}
          productionTotal={getProductionTotal(farm.annualProduction)}
          HouseActive={activeHouse}
        />
      ))}
    </ul>
  );
};

export default Farm;
