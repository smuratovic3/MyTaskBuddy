import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { getMonth } from "../util";
import CalendarHeader from "../components/CalendarHeader";
import Month from "../components/Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";
import Sidebar from "../components/SideBar";
import MenuBarHP from "../components/MenuBarHP";

function HomePage() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className=" flex flex-col">
        <MenuBarHP /> {/* Add the MenuBarHP component here */}
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
