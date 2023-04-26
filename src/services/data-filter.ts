import DataType from "../types/DataType";
import { FilterKeys, FilterValues } from "../types/FilterType";

export default function (
  data: DataType[],
  filter: Map<FilterKeys, FilterValues>
): DataType[] {
  return data.filter((dataItem: DataType): boolean => {
    let isAllMatch: Array<boolean> = [];

    filter.forEach((val, key): void => {
      if (typeof val === "boolean") {
        isAllMatch.push(dataItem[key] === val);
      } else {
        isAllMatch.push(
          dataItem[key]?.toString().toLowerCase().includes(val.toLowerCase()) ??
            false
        );
      }
    });

    return !isAllMatch.includes(false);
  });
}
