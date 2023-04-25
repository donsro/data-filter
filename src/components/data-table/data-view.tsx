import React from "react";
import DataType from "../../types/DataType";

function DataItem(props: { data: DataType }): JSX.Element | null {
  const {
    data: { id, name, type, location, onHold },
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{location}</td>
      <td>{onHold ? "Yep" : null}</td>
    </tr>
  );
}

function DataView({ data }: { data: DataType[] }): JSX.Element | null {
  const items = data;

  if (items.length === 0) {
    return null;
  }

  const DataItems = items.map(
    (item: DataType): JSX.Element => <DataItem key={item["id"]} data={item} />
  );

  return <tbody>{DataItems}</tbody>;
}

export default DataView;
