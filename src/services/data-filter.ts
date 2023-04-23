import DataType from "../types/DataType";
import FilterType from "../types/FilterType";

export default function (
  data: DataType[],
  filter: Map<string, FilterType>
): DataType[] {
  return data.filter((dataItem: DataType): boolean => {
    let isAllMatch: Array<boolean> = [];

    filter.forEach((val: FilterType, key: string): void => {
      if (typeof val === "boolean") {
        isAllMatch.push(dataItem[key] === val);
      }
      if (typeof val === "string" && dataItem[key] !== undefined) {
        isAllMatch.push(
          dataItem[key].toLowerCase().includes(val.toLowerCase())
        );
      }
    });

    return !isAllMatch.includes(false);
  });
}
