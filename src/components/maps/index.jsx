import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './styles';

const Maps = ({ location, onPickedLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { lat, lng } = location || {};

  const initialRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlerPickLocation = (event) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
    onPickedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
        minZoomLevel={15}
        onPress={onHandlerPickLocation}>
        {selectedLocation ? (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
};

export default Maps;
