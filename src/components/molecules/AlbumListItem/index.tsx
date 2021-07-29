import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import IAmbuls from '../../../models/IAlbums';

export interface AlbumListItemProps {
  album: IAmbuls;
  index: number;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
}

const UserListItem: FC<AlbumListItemProps> = ({
    album,
  index,
  setSelectedUser,
}) => {
  const onPress = () => {
    setSelectedUser(index);
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

export default UserListItem;