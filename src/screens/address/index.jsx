import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { selectPlaces } from '../../db/index';

const Address = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const handlePress = () => {
    navigation.navigate('CreateAddress');
  };

  useFocusEffect(
    useCallback(() => {
      const getPlaces = async () => {
        const places = await selectPlaces();
        setPlaces(places);
      };
      getPlaces();

      return () => {
        setPlaces([]);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => {
          const { lat, lng } = JSON.parse(item.coords);
          return (
            <View style={styles.itemContainer}>
              <View style={styles.mapImageContainer}>
                <Image source={{ uri: item.image }} style={styles.mapImage} />
              </View>
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemAddress}>{item.address}</Text>
                <Text style={styles.itemCoords}>{`Lat: ${lat} Lng: ${lng}`}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
        <View style={styles.floatingButtonTextContainer}>
          <Text style={styles.floatingButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
