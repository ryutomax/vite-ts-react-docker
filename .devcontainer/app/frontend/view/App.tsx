import { useState, useEffect } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};



function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = async () => {
    if (!taskText.trim()) return;
    const res = await fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskText }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const removeTask = async (id: number) => {
    await fetch(`http://localhost:3001/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>TODOリスト</h1>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      <button onClick={addTask}>追加</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
