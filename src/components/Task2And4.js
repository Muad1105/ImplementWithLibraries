import React from "react";
import D3View from "./tree-nodes/D3View";
import D3College from "./tree-nodes/D3College";

const Task2And4 = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <h4>Example.1</h4>
        <D3View />
      </div>
      <div>
        <h4>Example.2</h4>
        <D3College />
      </div>
    </div>
  );
};

export default Task2And4;
