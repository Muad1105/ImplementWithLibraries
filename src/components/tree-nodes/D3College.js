import React from "react";
import Tree from "react-d3-tree";

const orgChart = {
  name: "Management",
  children: [
    {
      name: "Dean",
      attributes: {
        department: "Organiser",
      },
      children: [
        {
          name: "HOD CSE",

          attributes: {
            department: "Coordination",
          },
          children: [
            {
              name: "Professor 1",
              attributes: {
                InCharge: "Section A",
              },
            },
            {
              name: "Professor 2",
              attributes: {
                InCharge: "Section A",
              },
            },
          ],
        },
        {
          name: "HOD Aero",
          attributes: {
            Duty: "Coordination",
          },
          children: [
            {
              name: "Professor 3",
              attributes: {
                InCharge: "Section A",
              },
            },
          ],
        },
      ],
    },
  ],
};

const D3College = () => {
  return (
    <div
      id="treeWrapper"
      style={{ width: "100%", height: "50vw", margin: "2px solid red" }}
    >
      <Tree data={orgChart} />
    </div>
  );
};

export default D3College;
