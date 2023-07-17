import React from "react";
import Tree from "react-d3-tree";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Team Lead",

          attributes: {
            department: "Coordination",
          },
          children: [
            {
              name: "Resource 1",
              attributes: {
                department: "Frontend",
              },
            },
            {
              name: "Resource 2",
              attributes: {
                department: "Backend",
              },
            },
          ],
        },
        {
          name: "Team Lead",
          attributes: {
            Coordinator: "",
          },
          children: [
            {
              name: "Employee 3",
              attributes: {
                backend: "database",
              },
            },
          ],
        },
      ],
    },
  ],
};

const D3View = () => {
  return (
    <div
      id="treeWrapper"
      style={{ width: "100%", height: "50vw", margin: "2px solid red" }}
    >
      <Tree data={orgChart} />
    </div>
  );
};

export default D3View;
