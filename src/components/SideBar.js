import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

const sidebarStyle = {
  padding: "5px",
  width: "220px",
  position: "fixed",
  top: "0",
  left: "0",
  height: "100vh",
  marginLeft: "20px",
};

function Sidebar() {
  return (
    <aside style={sidebarStyle}>
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}

export default Sidebar;
