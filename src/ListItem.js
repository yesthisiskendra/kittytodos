import React from "react";
import "./App.css";

function ListItem(props) {
  return (
    <div className="ListItem">
      {props.item}
      <button onClick={() => props.delete(props.item)}>x</button>
    </div>
  );
}

export default ListItem;
