import React, { useEffect, useState } from "react";
import { Treebeard } from "react-treebeard";

const TreeBeardSports = () => {
  const [data, setData] = useState({});
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const data = {
      name: "Sport",
      toggled: true,
      children: [
        {
          name: "Cricket Teams",
          toggled: true,
          children: [
            {
              name: "India",
              children: [
                {
                  name: "Batsmen",
                  children: [
                    { name: "Rohit Sharma" },
                    { name: "Shubham Gill" },
                  ],
                },
                {
                  name: "Bowlers",
                  children: [
                    { name: "Muhammad Shami" },
                    { name: "Muhammad Siraj" },
                  ],
                },
                { name: "All Rounders" },
              ],
            },
            {
              name: "Austrailia",
              loading: false,
              children: [],
            },
            {
              name: "Newzealand",
              children: [
                {
                  name: "Batamen",
                  children: [
                    { name: "nested child 1" },
                    { name: "nested child 2" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Tennis",
          toggled: true,
          children: [
            {
              name: "Serena WIlliams",
              children: [
                { name: "Right Hand" },
                { name: "Technique and Strength" },
              ],
            },
            {
              name: "Roger Frederer",
              loading: false,
              children: [{ name: "Right Hand" }, { name: "Volley" }],
            },
            {
              name: "Rafel Nadal",
              loading: false,
              children: [{ name: "Right Hand" }, { name: "Backhand Smash" }],
            },
            {
              name: "Maria Sharapova",
              children: [
                { name: "Right Hand" },
                {
                  name: "Angles",
                  children: [{ name: "Volleys" }, { name: "Smash" }],
                },
              ],
            },
          ],
        },
      ],
    };
    setData(data);
  }, []);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
  };

  return (
    <div
      style={{
        width: "60vW",
        textAlign: "left",
        background: "#21252B",
        border: "2px solid black",
      }}
    >
      <Treebeard data={data} onToggle={onToggle} />
    </div>
  );
};

export default TreeBeardSports;
