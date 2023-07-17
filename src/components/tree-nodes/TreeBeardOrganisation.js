import React, { useEffect, useState } from "react";
import { Treebeard } from "react-treebeard";

const TreeBeardOrganisation = () => {
  const [data, setData] = useState({});
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const data = {
      name: "CEO",
      toggled: true,
      children: [
        {
          name: "COO",
          toggled: true,
          children: [
            {
              name: "Manager 1",
              children: [
                {
                  name: "Coordinator 1",
                  children: [{ name: "Emp 1" }, { name: "Emp 2" }],
                },
                {
                  name: "Coordinator 2",
                  children: [{ name: "Emp 3" }, { name: "Emp 4" }],
                },
                { name: "Team 3" },
              ],
            },
          ],
        },
        {
          name: "COO",
          toggled: true,
          children: [
            {
              name: "Manager 1",
              children: [
                {
                  name: "Coordinator 1",
                  children: [{ name: "Emp 1" }, { name: "Emp 2" }],
                },
                {
                  name: "Coordinator 2",
                  children: [{ name: "Emp 3" }, { name: "Emp 4" }],
                },
                { name: "Team 3" },
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
        width: "100%",
        textAlign: "left",
        // paddingLeft: "300px",
        background: "#21252B",
      }}
    >
      <Treebeard data={data} onToggle={onToggle} />
    </div>
  );
};

export default TreeBeardOrganisation;
