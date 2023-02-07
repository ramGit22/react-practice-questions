import React from 'react';
import { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [newTask, setNewTask] = useState({ description: '' });

  const handleTaskChecked = () => {
    setCompletedTasks(completedTasks + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, description: newTask.description },
    ]);
    setNewTask({ description: '' });
  };

  const handleInputChange = (e) => {
    setNewTask({ description: e.target.value });
  };

  return (
    <div>
      <h3>Task List</h3>
      <p>Number of completed tasks: {completedTasks}</p>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onChecked={handleTaskChecked} />
      ))}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskList;
