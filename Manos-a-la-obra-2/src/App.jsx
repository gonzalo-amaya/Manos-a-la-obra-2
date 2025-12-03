import { useState } from "react";
import Title from "./components/Title/Title";
import TaskForm from "./components/Taskform/TaskForm";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;