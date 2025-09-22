import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h3>Bài 1: To-do List</h3>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {t}
            <button
              onClick={() => handleDelete(index)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "3px 8px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
