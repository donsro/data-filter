export default function (data = [], filter = new Map()) {
  return data.filter((dataItem) => {
    let isAllMatch = [];

    filter.forEach((value, key) => {
      if (typeof value === "boolean") {
        isAllMatch.push(dataItem[key] === value);
      }
      if (typeof value === "string") {
        isAllMatch.push(
          dataItem[key].toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    return !isAllMatch.includes(false);
  });
}
