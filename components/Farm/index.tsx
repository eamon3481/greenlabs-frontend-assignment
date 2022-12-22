import useFarms from "queries/useFarms";
import React from "react";
import FarmList from "./FarmList";
import { getProductionTotal } from "utils";

const Farm = () => {
  /* TODO: Q3-2 화면 조작
  - 랜더링 된 컴포넌트에서 하우스를 동작시키는 함수를 작성해 주세요 역시 예시 이미지를 확인 하세요.
  */
  const { data, isLoading } = useFarms();

  if (!data || isLoading) return null;

  return (
    <div className="px-2 flex flex-col gap-2">
      {data.farms.map((farm) => (
        <FarmList
          key={farm.id}
          {...farm}
          productionTotal={getProductionTotal(farm.annualProduction)}
          HouseActive={() => {}}
        />
      ))}
    </div>
  );
};

export default Farm;
