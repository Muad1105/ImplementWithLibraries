import React from "react";
import TreeBeardSports from "./tree-nodes/TreeBeardSports";
import TreeBeardOrganisation from "./tree-nodes/TreeBeardOrganisation";

const Task1 = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div>
        <h2>Example 1.</h2>
        <TreeBeardSports />
      </div>
      <div>
        <h2>Example 2.</h2>
        <TreeBeardOrganisation />
      </div>
    </div>
  );
};

export default Task1;
