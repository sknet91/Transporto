import React from 'react';
import { Button } from 'react-bootstrap';

const TaskButton = ({ task, isCompleted, onClick }) => {
  const buttonLabel = isCompleted ? 'Tarea finalizada' : `Hacer la tarea #${task}`;

  return (
    <Button
      variant={isCompleted ? 'dark' : 'light'}
      disabled={isCompleted}
      onClick={onClick}
      className="m-1 p-2 rounded-3"
    >
      {buttonLabel}
    </Button>
  );
};

export default TaskButton;
