import React, { useState } from 'react';
import AddEventForm from '../../components/organisms/Form/add-event';
import EventList from '../../components/organisms/List';
import EditModals from '../../components/organisms/Modals/edit-modals';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { useModal } from '../../hooks/useModal';

const HomePage: React.FC = () => {
  const [tasksList, setTasksList] = useState<any>([]);

  const handleSubmit = (values: any) => {
    setTasksList([...tasksList, values]);
  };

  const handleDeleteTask = (text: string) => {
    setTasksList(
      tasksList.filter((todo: { value: string }) => todo?.value !== text)
    );
  };

  const { showModal, isModalOpen, handleAccept, handleCancel } = useModal();

  return (
    <>
      <HomeTemplate
        form={<AddEventForm onFinish={handleSubmit} />}
        list={
          <EventList
            data={tasksList}
            onDeleteTask={handleDeleteTask}
            onEditTask={showModal}
          />
        }
      />
      <EditModals
        isModalOpen={isModalOpen}
        handleAccept={handleAccept}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default HomePage;
