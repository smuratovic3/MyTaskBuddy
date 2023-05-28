import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const [startTime, setStartTime] = useState(
    selectedEvent ? selectedEvent.startTime : ""
  );
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : ""
  );
  const [startPeriod, setStartPeriod] = useState(
    selectedEvent ? selectedEvent.startPeriod : "AM"
  );
  const [endPeriod, setEndPeriod] = useState(
    selectedEvent ? selectedEvent.endPeriod : "AM"
  );
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      startTime,
      endTime,
      startPeriod,
      endPeriod,
      location,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <form className="w-1/3 bg-white rounded-lg shadow-2xl">
        <header className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <span className="material-icons-outlined text-gray-400 text-xl">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-white text-xl">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-6">
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Naziv zadatka"
              value={title}
              required
              className="w-full pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-2xl font-semibold text-gray-600"
              onChange={(e) => setTitle(e.target.value)}
            />

            <div>
              <p className="text-xl text-black">
                {daySelected.format("dddd, MMMM DD")}
              </p>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor="startTime" className="text-black">
                    Vrijeme početka:
                  </label>
                  <input
                    type="text"
                    id="startTime"
                    name="startTime"
                    placeholder="HH:MM"
                    value={startTime}
                    required
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-black"
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  <span className="text-black">{startPeriod}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="startPeriodAM"
                    name="startPeriod"
                    value="AM"
                    checked={startPeriod === "AM"}
                    onChange={(e) => setStartPeriod(e.target.value)}
                  />
                  <label htmlFor="startPeriodAM" className="text-black">
                    AM
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="startPeriodPM"
                    name="startPeriod"
                    value="PM"
                    checked={startPeriod === "PM"}
                    onChange={(e) => setStartPeriod(e.target.value)}
                  />
                  <label htmlFor="startPeriodPM" className="text-black">
                    PM
                  </label>
                </div>
              </div>

              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor="endTime" className="text-black">
                    Vrijeme završetka:
                  </label>
                  <input
                    type="text"
                    id="endTime"
                    name="endTime"
                    placeholder="HH:MM"
                    value={endTime}
                    required
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-black"
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                  <span className="text-black">{endPeriod}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="endPeriodAM"
                    name="endPeriod"
                    value="AM"
                    checked={endPeriod === "AM"}
                    onChange={(e) => setEndPeriod(e.target.value)}
                  />
                  <label htmlFor="endPeriodAM" className="text-black">
                    AM
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="endPeriodPM"
                    name="endPeriod"
                    value="PM"
                    checked={endPeriod === "PM"}
                    onChange={(e) => setEndPeriod(e.target.value)}
                  />
                  <label htmlFor="endPeriodPM" className="text-black">
                    PM
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 text-3xl mr-2">
                segment
              </span>
              <input
                type="text"
                name="description"
                placeholder="Add a description"
                value={description}
                required
                className="w-full pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-gray-600"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined text-gray-400 text-3xl">
                location_on
              </span>
              <input
                type="text"
                name="location"
                placeholder="Lokacija"
                value={location}
                className="w-full pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-xl text-gray-600"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined text-gray-400 text-3xl">
                segment
              </span>
              <div className="flex gap-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center bg-${lblClass}-500 cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <footer className="flex justify-end p-4 mt-5 border-t">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
            >
              Sačuvaj
            </button>
          </footer>
        </div>
      </form>
    </div>
  );
}

export default EventModal;
