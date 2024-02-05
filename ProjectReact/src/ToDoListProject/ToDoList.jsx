import { useState } from "react";
import "./todolist.css";
const ToDoList = () => {
  let [userTask, setUserTask] = useState("");
  let [tasks, setTasks] = useState([
    "Play BGMI",
    "Learn DBMS",
    "Learn System Software",
  ]);
  return (
    <div className="todolist">
      <h1>To Do List</h1>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-row">
          <input
            type="text"
            className="input"
            value={userTask}
            onChange={(e) => {
              let value = e.target.value;
              setUserTask(value);
            }}
          />
          <button
            className="add-btn"
            onClick={() => {
              if (userTask !== "") {
                setTasks([...tasks, userTask]);
                setUserTask("");
              }
            }}
          >
            Add
          </button>
        </div>
      </form>
      <div className="task-list">
        {tasks.map((task, index) => {
          return (
            <div className="task" key={index}>
              <h2>{task}</h2>
              <button
                className="up-btn"
                onClick={() => {
                  if (index > 0) {
                    let newTasks = [...tasks];
                    [newTasks[index], newTasks[index - 1]] = [
                      newTasks[index - 1],
                      newTasks[index],
                    ];
                    setTasks(newTasks);
                  } else {
                    alert("It will not up");
                  }
                }}
              >
                ☝🏻
              </button>
              <button
                className="down-btn"
                onClick={() => {
                  if (index + 1 !== tasks.length) {
                    let newTask = [...tasks];
                    [newTask[index], newTask[index + 1]] = [
                      newTask[index + 1],
                      newTask[index],
                    ];
                    setTasks(newTask);
                  } else {
                    alert("It will not down");
                  }
                }}
              >
                👎🏻
              </button>
              <button
                className="remove-btn"
                onClick={() => {
                  let newTasks = tasks.filter((t, i) => i !== index);
                  setTasks(newTasks);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoList;
