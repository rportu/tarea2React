import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import IPhoto from '../../../models/IPhotos';

export interface PhotoListProps {
  setCurrentTodo: React.Dispatch<React.SetStateAction<IPhoto | null>>;
}

const PhotoList: React.FC<PhotoListProps> = ({setCurrentTodo}) => {
  const [photos, setTodos] = useState<IPhoto[]>([]);
  const fetchAlbumes = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onTodoClick = (todo: IPhoto) => {
    setCurrentTodo(todo);
  };

  useEffect(() => {
    fetchAlbumes();
  }, []);

  return (
    <View>
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onTodoClick(item)}>
              <Text>{item.title}</Text>
              <Image
        style={styles.image}
        source={{uri: item.thumbnailUrl}}
      />
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default PhotoList;
