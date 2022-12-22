import useFarms from "queries/useFarms";
import React from "react";
import FarmList from "./FarmList";
import { getProductionTotal } from "utils";
import useActiveHouse from "hooks/useActiveHouse";

const Farm = () => {
  const { data, isLoading } = useFarms();
  const { activeHouse } = useActiveHouse();

  if (!data || isLoading) return null;

  return (
    <div className="px-2 flex flex-col gap-2">
      {data.farms.map((farm) => (
        <FarmList
          key={farm.id}
          {...farm}
          productionTotal={getProductionTotal(farm.annualProduction)}
          HouseActive={activeHouse}
        />
      ))}
    </div>
  );
};

export default Farm;
