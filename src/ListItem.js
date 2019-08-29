import React from "react";
import "./App.css";

function ListItem(props) {
  return (
    <div className="ListItem">
      <span onClick={() => props.edit(props.item)}>{props.item}</span>
      <button onClick={() => props.delete(props.item)}>x</button>
    </div>
  );
}

export default ListItem;
