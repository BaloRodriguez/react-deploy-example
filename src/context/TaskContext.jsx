import { createContext, useState,useEffect } from "react";
import { task as data, task } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    alert("Eliminando ando " + taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {/* <h1>Componente Context</h1> */}
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
