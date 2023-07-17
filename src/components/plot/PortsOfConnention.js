import React from "react";
import { ForceGraph2D } from "react-force-graph";

const parentData = "data";

const childData = [
  { id: 1, label: "laf" },
  { id: 2, label: "laf" },
  { id: 3, label: "laf" },
];

function DataGraph({ parentData, childData }) {
  const graphData = {
    nodes: [
      { id: "parent", label: parentData },
      ...childData.map((child, index) => ({
        id: `child${index}`,
        label: child,
      })),
    ],
    links: childData.map((_, index) => ({
      source: "parent",
      target: `child${index}`,
    })),
  };

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeLabel="label"
      linkDirectionalParticles={2}
      linkDirectionalParticleWidth={(link) =>
        link.source === "parent" ? 3 : 0
      }
    />
  );
}

export default DataGraph;
