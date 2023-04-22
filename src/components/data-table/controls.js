import React, { useRef, useEffect } from "react";

function Controls({ filter, setFilter }) {
  const nameRef = useRef(null);
  const idRef = useRef(null);
  const typeRef = useRef(null);
  const marketRef = useRef(null);
  const onHoldRef = useRef(null);

  const handleChange = (key, value) => {
    if (value === "All" || value === "" || value === false) {
      setFilter((prev) => {
        const newState = new Map(prev);
        newState.delete(key);
        return newState;
      });
    } else {
      setFilter((prev) => {
        const newState = new Map(prev);
        newState.set(key, value);
        return newState;
      });
    }
  };

  useEffect(() => {
    if (filter.size === 0) {
      idRef.current.value = null;
      marketRef.current.value = "All";
      nameRef.current.value = null;
      typeRef.current.value = "All";
      onHoldRef.current.checked = false;
    }
  }, [filter]);

  return (
    <thead>
      <tr>
        <th>
          <label>
            ID{" "}
            <input
              onChange={() => handleChange("id", idRef.current.value)}
              ref={idRef}
            />
          </label>
        </th>
        <th>
          <label>
            Name{" "}
            <input
              onChange={() => handleChange("name", nameRef.current.value)}
              ref={nameRef}
            />
          </label>
        </th>
        <th>
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
        </th>
        <th>
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
        </th>
        <th>
          <label>
            On hold{" "}
            <input
              type="checkbox"
              onChange={() => handleChange("onHold", onHoldRef.current.checked)}
              ref={onHoldRef}
            />
          </label>
        </th>
      </tr>
    </thead>
  );
}

export default Controls;
