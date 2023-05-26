import React from 'react';
import { Card } from 'react-bootstrap';
import TaskButton from '../taskbutton/TaskButton';

const TaskCard = ({ title, tasks, completedTasks, onTaskClick }) => {
  return (
    <div className="col-md-4">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex flex-column">
            {tasks.map((task) => (
              <TaskButton
                key={task.id}
                task={task.id}
                isCompleted={completedTasks.includes(task.id)}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskCard;
