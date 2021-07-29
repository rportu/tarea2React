import styled from '@emotion/native';
import React from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import IPhotos from '../../../models/IPhotos';
import IAlbums from '../../../models/IAlbums';
import AlbumListItem from '../AlbumListItem';

export interface AlbumDetailsProps {
  selectedUser: number;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
  albums: IAlbums[];
  setUsers: React.Dispatch<React.SetStateAction<IAlbums[]>>;
}

const AlbumDetails: React.FC<AlbumDetailsProps> = ({
  selectedUser,
  setSelectedUser,
  albums,
  setUsers,
}) => {
  const { title, photo} = albums[selectedUser];

  const onBackPress = () => {
    setSelectedUser(null);
  };

  return (
    <Container>
      <CustomText>{title}</CustomText>
   

     

   
      <Button title="Back" onPress={onBackPress} />
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
  height: 100%;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const TodoList = styled.FlatList`
  padding: 8px;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default AlbumDetails;