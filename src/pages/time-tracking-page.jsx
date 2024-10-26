import React, { useEffect, useState } from "react";
import Button from "../components/ui/button";
import { formatTime } from "../utils";

export const TimeTrackingPage = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState({
    name: "",
    timeSpent: 0,
    startTime: null,
    isRunning: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTask.isRunning) {
        setActiveTask((prev) => ({
          ...prev,
          timeSpent: prev.timeSpent + 1,
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTask.isRunning]);

  const startHandler = () => {
    if (activeTask.name.trim()) {
      setActiveTask((prev) => ({
        ...prev,
        startTime: new Date(),
        isRunning: true,
      }));
    }
  };

  const pauseHandler = () => {
    setActiveTask((prev) => ({
      ...prev,
      isRunning: false,
    }));
  };

  const saveHandler = () => {
    if (activeTask.timeSpent > 0) {
      const newTask = {
        id: Date.now(),
        name: activeTask.name,
        startTime: activeTask.startTime,
        timeSpent: activeTask.timeSpent,
        endTime: new Date(),
      };
      setTasks((prev) => [...prev, newTask]);
      setActiveTask({
        name: "",
        timeSpent: 0,
        startTime: null,
        isRunning: false,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-slate-100 p-3">
        <h1 className="font-semibold text-2xl">Time Tracker</h1>
      </div>
      <div className="bg-blue-100 p-3">
        <h3 className="font-semibold text-xl">Current Task</h3>
        <div className="flex mt-4">
          <input
            type="text"
            name="activity"
            id="activity"
            placeholder="What do we do today?"
            className="flex-1 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border"
            onChange={(e) =>
              setActiveTask((prev) => ({ ...prev, name: e.target.value }))
            }
            value={activeTask.name}
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <span className="font-semibold text-2xl font-mono">
            {formatTime(activeTask.timeSpent)}
          </span>
          <div className="flex items-center gap-3">
            {!activeTask.isRunning ? (
              <Button
                name="Start"
                bgColor="bg-green-500"
                type="submit"
                onClick={startHandler}
              />
            ) : (
              <Button name="Stop" onClick={pauseHandler} />
            )}
            <Button name="Save" bgColor="bg-red-500" onClick={saveHandler} />
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-3 space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="bg-white space-y-1 p-3 rounded-md flex justify-between">
              <div>
                <h3 className="font-semibold">{task.name}</h3>
                <p className="text-sm text-gray-500 font-light">
                  {task.timeSpent}
                </p>
                <p className="text-sm text-gray-500">
                  {task.startTime.toLocaleTimeString()} -
                  {task.endTime.toLocaleTimeString()}
                </p>
              </div>
              <Button name="Delete" bgColor="bg-red-500" />
            </div>
          ))
        ) : (
          <div>
            <p className="text-center">No Data</p>
          </div>
        )}
      </div>
    </div>
  );
};
