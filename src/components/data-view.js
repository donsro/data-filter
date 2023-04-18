import React from "react";

function DataItem(props) {
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

function DataView({ data }) {
  const items = data || [];

  if (!items.length) {
    return null;
  }

  const DataItems = items.map((item) => (
    <DataItem key={item["id"]} data={item} />
  ));

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Location</th>
          <th>On hold</th>
        </tr>
      </thead>
      <tbody>{DataItems}</tbody>
    </table>
  );
}

export default DataView;
