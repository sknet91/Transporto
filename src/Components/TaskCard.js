import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TaskCard = ({ title, tasks, renderTaskButton }) => {
  return (
    <div className="col-md-4">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex flex-column">
            {tasks.map((task) => renderTaskButton(task))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskCard;