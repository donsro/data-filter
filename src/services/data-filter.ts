import DataType from "../types/DataType";
import { FilterKeys, FilterValues } from "../types/FilterType";

export default function (
  data: DataType[],
  filter: Map<FilterKeys, FilterValues>
): DataType[] {
  return data.filter((dataItem: DataType): boolean => {
    let isAllMatch: Array<boolean> = [];

    filter.forEach((val, key): void => {
      if (typeof dataItem[key] === "undefined") {
        isAllMatch.push(false);
      } else if (typeof val === "boolean") {
        isAllMatch.push(dataItem[key] === val);
      } else {
        isAllMatch.push(
          dataItem[key].toLowerCase().includes(val.toLowerCase())
        );
      }
    });

    return !isAllMatch.includes(false);
  });
}
