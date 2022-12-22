import { ProductionType } from "libs/type";

export const getProductionTotal = (productions: ProductionType[]) => {
  return productions.reduce((acc, cur) => {
    return acc + cur.Production;
  }, 0);
};
