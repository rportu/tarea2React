import styled from '@emotion/native';
import React from 'react';
import {View, Text} from 'react-native';
import IAlbum from '../../../models/IAlbums';
import IPhoto from '../../../models/IPhotos';

export interface TodoListItemProps {
  photo: IPhoto;
  albums: IAlbum[];
  setUsers: React.Dispatch<React.SetStateAction<IAlbum[]>>;
  selectedUser: number;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
    photo,
    albums,
  setUsers,
  selectedUser,
}) => {
  const {title , id} = photo;

  const onCheck = (newValue: boolean) => {
    // Actualiza el arreglo de TODOS


 

    // Actualiza TODO el arreglo de USERS
    const newUsers = [...albums];
    newUsers[selectedUser] = {...albums[selectedUser]};

    setUsers(newUsers);
  };

  return (
    <Container>
      <CustomText>
        {id}. {title} 
      </CustomText>
      <text>gola</text>
      

    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

export default TodoListItem;
