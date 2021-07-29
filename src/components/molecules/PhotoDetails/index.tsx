import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import IPhoto from '../../../models/IPhotos';


export interface PhotoDetails {
  photo: IPhoto;
  setCurrentTodo: React.Dispatch<React.SetStateAction<IPhoto | null>>;
}

const TodoDetails: React.FC<PhotoDetails> = ({photo, setCurrentTodo}) => {
  return (
    <View>
      <Text>{photo.id}</Text>
      <Text>{photo.title}</Text>
      <Image
        style={styles.image}
        source={{uri: photo.thumbnailUrl}}
      />
      
      <Button title="Back" onPress={() => setCurrentTodo(null)} />
    </View>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default PhotoDetails;