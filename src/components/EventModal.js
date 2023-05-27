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

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
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
      <form className="w-1/4 bg-white rounded-lg shadow-2xl">
        <header className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <span className="material-icons-outlined text-gray-400">
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
              <span className="material-icons-outlined text-white">close</span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-y-7 items-center">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                required
                className="w-full pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-2xl font-semibold text-gray-600"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 text-3xl mr-2">
                schedule
              </span>
              <p className="text-xl">{daySelected.format("dddd, MMMM DD")}</p>
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
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 text-3xl mr-2">
                bookmark_border
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
        </div>
        <footer className="flex justify-end p-3 mt-5 border-t">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
