import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import IPhoto from '../../../models/IPhotos';
import IAlbum from '../../../models/IAlbums';
import UserListItem from '../../molecules/AlbumListItem';

export interface AlbumListProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
  albums: IAlbum[];
  setUsers: React.Dispatch<React.SetStateAction<IAlbum[]>>;
}

const AlbumList: React.FC<AlbumListProps> = ({
  setSelectedUser,
  albums,
  setUsers,
}) => {
  const fetchData = async () => {
    try {
      const albumReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const photoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      const albums = (albumReponse.data as IAlbum[]).map(user => ({
        ...user,
        todos: (photoResponse.data as IPhoto[]).filter(
          todo => todo.albumId === user.id,
        ),
      }));

      setUsers(albums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item, index}) => (
            <UserListItem
              key={item.id}
              album={item}
              index={index}
              setSelectedUser={setSelectedUser}
            />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
