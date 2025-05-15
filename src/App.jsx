import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import Card from "./components/Card";

const App = () => {
  const [task, setTask] = useState([]);
  console.log(task.length, task);
  const handleTaskChange = (newvalue) => {
    const newTaks = { id: Date.now(), name: newvalue, status: "incomplete" };
    setTask((prevTask) => [...prevTask, newTaks]);
  };

  const updateTaskStatus = (id, isChecked) => {
    const updated = task.map((t) =>
      t.id === id ? { ...t, status: isChecked ? "complete" : "incomplete" } : t
    );
    setTask(updated);
  };

  return (
    <div className="flex flex-col bg-[#020817] h-screen ">
      <div className="h-20 flex items-center justify-center mt-5 md:mt-10">
        <h1 className="text-[min(10vw,40px)] font-bold text-[#FAFAFA]">
          Task Manager
        </h1>
      </div>
      <div className="flex bg-[#020817] items-center justify-center flex-col">
        <TaskInput onTaskChange={handleTaskChange} task={task} />
        <Card task={task} status={updateTaskStatus} />
      </div>
    </div>
  );
};

export default App;
