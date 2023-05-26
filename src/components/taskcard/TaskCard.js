import React from "react";
import { Card } from "react-bootstrap";
import TaskButton from "../taskbutton/TaskButton";

const TaskCard = ({ title, tasks, completedTasks, onTaskClick }) => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 7,
      }}
    />
  );
  return (
    <div className="col-md-4 mt-4">
      <Card
        className="mb-4 h-100 d-flex flex-fill"
        style={{ backgroundColor: "#a2caea" }}
      >
        <Card.Body>
          <Card.Title className="text-center" as="h3">
            {title}
          </Card.Title>

          <ColoredLine color="#eaf4fe" />
          <div className="m-4 d-flex flex-column">
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
