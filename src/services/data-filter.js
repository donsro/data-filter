export default function (data = [], filter = {}) {
  return data.filter((dataItem) => {
    let isAllMatch = [];

    for (let key in filter) {
      if (typeof filter[key] === "boolean") {
        isAllMatch.push(dataItem[key] === filter[key]);
      }

      if (typeof filter[key] === "string") {
        isAllMatch.push(
          dataItem[key].toLowerCase().includes(filter[key].toLowerCase())
        );
      }
    }

    return !isAllMatch.includes(false);
  });
}
