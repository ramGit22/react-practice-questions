import React, { useState } from 'react';

const Task = ({ task, onChecked }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    onChecked();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {task.description}
      </p>
    </div>
  );
};

export default Task;
