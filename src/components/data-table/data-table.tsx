import React, { useState, useEffect } from "react";

import Controls from "./controls";
import DataFilter from "../../services/data-filter";
import DataView from "./data-view";

import dataIntact from "../../data.json";
import DataType from "../../types/DataType";

export default function () {
  const [data, setData] = useState<DataType[]>(dataIntact);
  const [filter, setFilter] = useState(new Map());

  useEffect(() => setData(DataFilter(dataIntact, filter)), [filter]);

  return (
    <div>
      <div className="clearAll">
        <button onClick={() => setFilter(() => new Map())}>
          Clear all filters
        </button>
      </div>
      <table className="data-table">
        <Controls filter={filter} setFilter={setFilter} />
        <DataView data={data} />
      </table>
    </div>
  );
}
