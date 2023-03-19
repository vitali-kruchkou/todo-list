import React from 'react';

import Text from '../../atoms/Typography/Paragraph';
import ListItem from '../../molecules/list-item';
import { IListProps } from './type';

const EventList: React.FC<IListProps> = ({
  data,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <>
      {data?.length > 0 ? (
        data?.map((item: any) => (
          <ListItem
            text={item?.value}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))
      ) : (
        <Text>You don't have any tasks</Text>
      )}
    </>
  );
};

export default EventList;
