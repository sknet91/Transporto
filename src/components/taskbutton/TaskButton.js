import React from 'react';
import { Button } from 'react-bootstrap';

const TaskButton = ({ task, isCompleted, onClick }) => {
  const buttonLabel = isCompleted ? 'Tarea finalizada' : `Hacer la tarea #${task}`;

  return (
    <Button
      variant={isCompleted ? 'secondary' : 'primary'}
      disabled={isCompleted}
      onClick={onClick}
      className="m-1"
    >
      {buttonLabel}
    </Button>
  );
};

export default TaskButton;
