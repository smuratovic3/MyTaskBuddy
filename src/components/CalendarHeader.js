import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header
      className="px-4 py-2 flex flex-col items-center"
      style={{ marginTop: "50px" }}
    >
      <div className="flex items-center">
        <img
          src="/assets/images/calLogo.png"
          alt="calendar"
          className="mr-2 w-12 h-12"
        />
        <h1 className="mr-10 text-xl text-white-500 font-bold">Calendar</h1>
        <button
          onClick={handleReset}
          style={{
            border: "1px solid",
            borderRadius: "3px",
            padding: "4px 8px",
            fontSize: "12px",
            backgroundColor: "gray",
            color: "black",
            marginRight: "10px",
          }}
        >
          Today
        </button>
        <span
          onClick={handlePrevMonth}
          className="cursor-pointer text-white-600 mx-2"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </span>
        <span
          onClick={handleNextMonth}
          className="cursor-pointer text-white-600 mx-2"
        >
          <span className="material-icons-outlined">chevron_right</span>
        </span>
        <h2 className="text-xl text-white-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
    </header>
  );
}
export default CalendarHeader;
