import React, {useState} from 'react';
import {View} from 'react-native';
import IUser from '../../../models/IAlbums';
import UserDetails from '../../molecules/AlbumDetails';
import UserList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <View>
      {selectedUser ? (
        <UserDetails
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          albums={users}
          setUsers={setUsers}
        />
      ) : (
        <UserList
          setSelectedUser={setSelectedUser}
          albums={users}
          setUsers={setUsers}
        />
      )}
    </View>
  );
};

export default HomeScreen;