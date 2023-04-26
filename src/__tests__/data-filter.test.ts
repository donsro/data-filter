import DataFilter from "../services/data-filter";
import dataIntact from "../data.json";

test("filter data by string id", () => {
  const dataFilter = new Map();
  dataFilter.set("id", "0");
  const result = DataFilter(dataIntact, dataFilter);
  expect(result.length).toBe(6);
});

test("filter data by string id and name", () => {
  const dataFilter = new Map();
  dataFilter.set("id", "0011");
  dataFilter.set("name", "");
  const result = DataFilter(dataIntact, dataFilter);
  expect(result.length).toBe(0);
});

test("filter data by boolean onHold", () => {
  const dataFilter = new Map();
  dataFilter.set("onHold", true);
  const result = DataFilter(dataIntact, dataFilter);
  expect(result.length).toBe(2);
});
