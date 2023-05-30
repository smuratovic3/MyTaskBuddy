import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [isImportantTask, setIsImportantTask] = useState(
    selectedEvent ? selectedEvent.isImportantTask : false
  );
  const [subtasks, setSubtasks] = useState(
    selectedEvent ? selectedEvent.subtasks : []
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
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const [priority, setPriority] = useState(
    selectedEvent ? selectedEvent.priority : ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      isImportantTask,
      subtasks,
      label: selectedLabel,
      day: daySelected.valueOf(),
      startTime,
      endTime,
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

  function handleSubtasksChange(e) {
    const inputSubtasks = e.target.value.split("\n");
    setSubtasks(inputSubtasks);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <form className="w-1/2 bg-white rounded-lg shadow-2xl">
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
                className="material-icons-outlined text-gray-400 cursor-pointer mr-4"
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
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined text-gray-400 text-3xl">
                priority_high
              </span>
              <select
                value={priority}
                className="w-full border border-gray-300 rounded text-black"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Prioritet zadataka</option>

                <option value="high">Visok</option>
              </select>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Naziv zadatka"
              value={title}
              required
              className="w-full pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-2xl font-semibold text-gray-600"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mt-4">
              <label className="text-black">Podzadaci:</label>
              <textarea
                value={subtasks.join("\n")}
                className="w-full px-2 py-1 border border-gray-300 rounded text-black"
                onChange={handleSubtasksChange}
              ></textarea>
            </div>

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
                </div>
              </div>
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
