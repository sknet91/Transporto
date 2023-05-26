import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskCard from "../taskcard/TaskCard";
import Title from "../tasktitle/Title";

const TaskCards = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              { title: "Tarea #1", tasks: [{ id: 1, name: "Tarea #1" }] },
              { title: "Tarea #2", tasks: [{ id: 2, name: "Tarea #2" }] },
              {
                title: "Tarea #3",
                tasks: [
                  { id: 3.1, name: "Tarea #3.1" },
                  { id: 3.2, name: "Tarea #3.2" },
                ],
              },
              {
                title: "Tarea #4",
                tasks: [
                  { id: 4.1, name: "Tarea #4.1" },
                  { id: 4.2, name: "Tarea #4.2" },
                  { id: 4.3, name: "Tarea #4.3" },
                ],
              },
              {
                title: "Tarea #5",
                tasks: [
                  { id: 5.1, name: "Tarea #5.1" },
                  { id: 5.2, name: "Tarea #5.2" },
                ],
              },
              { title: "Tarea #6", tasks: [{ id: 6, name: "Tarea #6" }] },
            ]);
          }, 1000);
        });

        setTasks(response);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = (task) => {
    if (!canStartTask(task)) {
      return;
    }

    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const handleFinishTask = (task) => {
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]);
    handleCloseModal();
  };

  const canStartTask = (task) => {
    const requiredTasks = {
      3.2: 3.1,
      4.1: 3.2,
      5.2: 5.1,
    };

    if (requiredTasks[task] && !completedTasks.includes(requiredTasks[task])) {
      const requiredTaskNumber = requiredTasks[task];
      let message = "";
      if (!completedTasks.includes(1)) {
        message = `Recuerde que debe finalizar la tarea #1 primero.`;
      } else {
        message = `Recuerde que debe finalizar la tarea #${requiredTaskNumber} primero.`;
      }
      toast.error(message);
      return false;
    }

    if (task !== 1 && !completedTasks.includes(1)) {
      toast.error("Recuerde que debe finalizar la tarea #1 primero.");
      return false;
    }

    return true;
  };

  const renderTaskCards = () => {
    return tasks.map((group) => (
      <TaskCard
        key={group.title}
        title={group.title}
        tasks={group.tasks}
        completedTasks={completedTasks}
        onTaskClick={handleOpenModal}
      />
    ));
  };

  return (
    <div className="container">
      <Title text="Panel de tareas" />
      <div className="row">{renderTaskCards()}</div>
      <Modal show={selectedTask !== null} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar tarea #{selectedTask}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas finalizar la tarea #{selectedTask}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => handleFinishTask(selectedTask)}
          >
            Finalizar tarea #{selectedTask}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default TaskCards;
