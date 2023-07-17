import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <button onClick={() => navigate("/task.1")}>
        1. Collapse and expand the parent nodes and child nodes. View the
        details of connection on click
      </button>
      <button onClick={() => navigate("/task.2.4")}>
        2. Expand and collapse edges. Zoom in and zoom out to view the
        captions/details of the edges to get a birds-eye view. Group the nodes
        with a single click. Ability to view the details of each node. Expanded
        node size should be automatically changed based on the number of nodes
        inside the same.
      </button>
    </div>
  );
};

export default HomePage;
