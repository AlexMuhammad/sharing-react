import React from "react";
import Button from "../components/ui/button";

export const TimeTrackingPage = () => {
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
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <span className="font-semibold text-2xl font-mono">00:00:01</span>
          <div className="flex items-center gap-3">
            <Button name="Start" bgColor="bg-green-500" type="submit" />
            <Button name="Stop" />
            <Button name="Save" bgColor="bg-red-500" />
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-3 space-y-2">
        <div className="bg-white space-y-1 p-3 rounded-md flex justify-between">
          <div>
            <h3 className="font-semibold">Task Name</h3>
            <p className="text-sm text-gray-500 font-light">00:00:01</p>
            <p className="text-sm text-gray-500">9:59:31 PM - 9:59:33 PM</p>
          </div>
          <Button name="Delete" bgColor="bg-red-500" />
        </div>
      </div>
    </div>
  );
};
