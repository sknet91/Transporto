import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskCard from './TaskCard';

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
              { id: 1, name: 'Tarea #1' },
              { id: 2, name: 'Tarea #2' },
              { id: '3.1', name: 'Tarea #3.1' },
              { id: '3.2', name: 'Tarea #3.2' },
              { id: '4.1', name: 'Tarea #4.1' },
              { id: '4.2', name: 'Tarea #4.2' },
              { id: '4.3', name: 'Tarea #4.3' },
              { id: '5.1', name: 'Tarea #5.1' },
              { id: '5.2', name: 'Tarea #5.2' },
              { id: 6, name: 'Tarea #6' },
            ]);
          }, 1000);
        });

        setTasks(response);
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
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
      '3.2': '3.1',
      '4.1': '3.2',
      '5.2': '5.1',
    };

    if (requiredTasks[task] && !completedTasks.includes(requiredTasks[task])) {
      const requiredTaskNumber = requiredTasks[task];
      const message = completedTasks.includes(1)
        ? `Recuerde que debe finalizar la tarea #${requiredTaskNumber} primero.`
        : `Recuerde que debe finalizar la tarea #1 primero.`;
      toast.error(message);
      return false;
    }

    if (task !== 1 && !completedTasks.includes(1)) {
      toast.error('Recuerde que debe finalizar la tarea #1 primero.');
      return false;
    }

    return true;
  };

  const isTaskCompleted = (task) => completedTasks.includes(task);

  const renderTaskButton = (task) => {
    const buttonLabel = isTaskCompleted(task) ? 'Tarea finalizada' : `Hacer la tarea #${task}`;

    return (
      <Button
        variant={isTaskCompleted(task) ? 'secondary' : 'primary'}
        disabled={isTaskCompleted(task)}
        onClick={() => handleOpenModal(task)}
        className="m-1"
        key={task}
      >
        {buttonLabel}
      </Button>
    );
  };

  const groupedTasks = [
    { title: 'Tarea #1', tasks: [1] },
    { title: 'Tarea #2', tasks: [2] },
    { title: 'Tarea #3', tasks: ['3.1', '3.2'] },
    { title: 'Tarea #4', tasks: ['4.1', '4.2', '4.3'] },
    { title: 'Tarea #5', tasks: ['5.1', '5.2'] },
    { title: 'Tarea #6', tasks: [6] },
  ];

  const renderTaskCards = () => {
    return groupedTasks.map((group) => (
      <TaskCard
        key={group.title}
        title={group.title}
        tasks={group.tasks}
        renderTaskButton={renderTaskButton}
      />
    ));
  };

  return (
    <div className="container">
      <h2 className="mb-4">Panel de tareas</h2>
      <div className="row">{renderTaskCards()}</div>
      <Modal show={selectedTask !== null} onHide={handleCloseModal}>
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
          <Button variant="primary" onClick={() => handleFinishTask(selectedTask)}>
            Finalizar tarea #{selectedTask}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default TaskCards;
