import React, { useRef, useEffect } from "react";
import { FilterKeys, FilterValues } from "../../types/FilterType";

type ControlProps = {
  filter: Map<FilterKeys, FilterValues>;
  setFilter: React.Dispatch<
    React.SetStateAction<Map<FilterKeys, FilterValues>>
  >;
};

function Controls({ filter, setFilter }: ControlProps): JSX.Element {
  const idRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const onHoldRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const handleChange = (key: FilterKeys, value: FilterValues): void => {
    if (value === "" || value === false) {
      setFilter((prev) => {
        const newState = new Map(prev);
        newState.delete(key);
        return newState;
      });
    } else {
      setFilter((prev) => new Map(prev.set(key, value)));
    }
  };

  useEffect((): void => {
    if (filter.size === 0) {
      const refs = [idRef, locationRef, nameRef, onHoldRef, typeRef];
      refs.forEach((ref) => {
        if (ref.current) {
          if (
            ref.current instanceof HTMLInputElement &&
            ref.current.type === "checkbox"
          ) {
            ref.current.checked = false;
            return;
          }
          ref.current.value = "";
        }
      });
    }
  }, [filter]);

  return (
    <thead>
      <tr>
        <th>
          <label>
            ID{" "}
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                handleChange("id", e.target.value)
              }
              ref={idRef}
            />
          </label>
        </th>
        <th>
          <label>
            Name{" "}
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                handleChange("name", e.target.value)
              }
              ref={nameRef}
            />
          </label>
        </th>
        <th>
          <label>
            Type{" "}
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
                handleChange("type", e.target.value)
              }
              ref={typeRef}
            >
              <option value="">All</option>
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
                handleChange("location", e.target.value)
              }
              ref={locationRef}
            >
              <option value="">All</option>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                handleChange("onHold", e.target.checked)
              }
              ref={onHoldRef}
            />
          </label>
        </th>
      </tr>
    </thead>
  );
}

export default Controls;
