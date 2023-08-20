import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Lista() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Código que se ejecuta al cargar o cambiar el estado 'tasks'
  }, [tasks]);

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {// Si no se ingresa nada no se guardara la tarea en blanco
      const task = {
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className="mt-3">Lista de activiades pendientes</h1>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar nueva actividad"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span
              className={task.completed ? 'completed' : null}
              onClick={() => handleTaskChange(index)}
            >
              {task.text}
            </span>
            <button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
