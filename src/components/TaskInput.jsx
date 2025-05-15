import React, { useState } from "react";

const TaskInput = ({ task, onTaskChange }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onTaskChange(value.trim());
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter Your Task"
          className="bg-[#020817] text-[#FAFAFA] border-2 focus:outline-0 focus:border-[#3B82F6] rounded-xl mt-5 md:mt-10 md:w-xl xl:w-2xl text-xl p-2 border-[#1E293B]"
        />
        <button
          type="submit"
          className="text-xl bg-[#3B82F6] py-2 px-4  border-2 border-[#1E293B] rounded-xl ml-2 cursor-pointer text-[#020817]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
