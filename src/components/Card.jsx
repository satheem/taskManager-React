import React from "react";

const Card = ({ task, status }) => {
  const handleCheck = (e) => {
    console.log(e.target.checked);
  };
  return (
    <div className="md:mt-10 mt-5 md:w-2xl w-xs font-semibold">
      <ul>
        {task.map((task) => (
          <li
            className="text-2xl text-blue-100 list-none mt-5 break-words whitespace-normal"
            key={task.id}
          >
            <input
              type="checkbox"
              checked={task.status === "complete"}
              name=""
              id=""
              onChange={(e) => status(task.id, e.target.checked)}
              className="mr-5 h-5 w-5"
            />
            <span className={task.status === "complete" ? "line-through opacity-50" : ""}>
              {task.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
