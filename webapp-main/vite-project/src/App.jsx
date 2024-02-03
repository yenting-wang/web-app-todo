import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [task, setTask] = useState([]); //タスク全体のリストを管理するステート
  const [newTask, setNewTask] = useState(""); //新しいタスクを追加するときのステート

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  };
  const handleRestTask = () => setTask([]);

  return (
    <>
      <h1>todoLit</h1>
      <ul>
        {task.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="新しいタスクを入力してください"
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>追加</button>
      <button onClick={handleRestTask}>リセット</button>
    </>
  );
}

export default App;