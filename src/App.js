import "./App.css";
import ConnectionFilter from "./components/specific-connection/ConnectionTable";
import ConnectionNetwork from "./components/specific-connection/ConnectionTable";

import D3View from "./components/tree-nodes/D3View";
import TreeBeardOrganisation from "./components/tree-nodes/TreeBeardOrganisation";
import TreeBeardSports from "./components/tree-nodes/TreeBeard";
import PortsOfConnention from "./components/plot/PortsOfConnention";
import HoverTooltip from "./components/plot/PortsOfConnention";
import D3College from "./components/tree-nodes/D3College";
// import DataGraph from "./components/plot/PortsOfConnention";
// import ConnectionTable from "./components/specific-connection/ConnectionTable";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "200px" }}
    >
      <TreeBeardSports />
      <TreeBeardOrganisation />
      <D3View />
      <D3College />
      {/* <ConnectionTable /> */}
    </div>
  );
}

export default App;
