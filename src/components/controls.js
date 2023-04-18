import React, { useRef } from "react";

function Controls({ filter, setFilter }) {
  const nameRef = useRef(null);
  const idRef = useRef(null);
  const typeRef = useRef(null);
  const marketRef = useRef(null);
  const onHoldRef = useRef(null);

  const handleChange = (type, value) => {
    if (value === "All" || value === "" || value === false) {
      delete filter[type];
      setFilter({ ...filter });
    } else {
      setFilter({ ...filter, [type]: value });
    }
  };

  const clearAllFilters = () => {
    idRef.current.value = null;
    marketRef.current.value = "All";
    nameRef.current.value = null;
    typeRef.current.value = "All";
    onHoldRef.current.checked = false;
    setFilter({});
  };

  return (
    <div>
      <div className="clearAll">
        <button onClick={clearAllFilters}>Clear all filters</button>
      </div>
      <h2>Filter</h2>
      <div className="controls">
        <div>
          <label>
            ID{" "}
            <input
              onChange={() => handleChange("id", idRef.current.value)}
              ref={idRef}
            />
          </label>
        </div>
        <div>
          <label>
            Name{" "}
            <input
              onChange={() => handleChange("name", nameRef.current.value)}
              ref={nameRef}
            />
          </label>
        </div>
        <div>
          <label>
            Type{" "}
            <select
              onChange={() => handleChange("type", typeRef.current.value)}
              ref={typeRef}
            >
              <option>All</option>
              <option>Cash</option>
              <option>Stock</option>
              <option>Bond</option>
              <option>Equity</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Location{" "}
            <select
              onChange={() => handleChange("location", marketRef.current.value)}
              ref={marketRef}
            >
              <option>All</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Pacific</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            On hold{" "}
            <input
              type="checkbox"
              onChange={() => handleChange("onHold", onHoldRef.current.checked)}
              ref={onHoldRef}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Controls;
