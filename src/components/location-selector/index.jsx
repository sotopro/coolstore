import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { URL_MAPS } from '../../constants/maps';
import { saveMapImageUrl } from '../../store/address/address.slice';
import { COLORS } from '../../themes';
import MapPreview from '../map-preview';

const LocationSelector = ({ onLocation }) => {
  const dispatch = useDispatch();
  const [pickedLocation, setPickedLocation] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );

      return false;
    }
    return true;
  };

  const mapPreviewUrlImage = pickedLocation
    ? URL_MAPS({ lat: pickedLocation.lat, lng: pickedLocation.lng, zoom: 15 })
    : '';

  const onHandlerGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await getCurrentPositionAsync({
      accuracy: 6,
      timeInterval: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    if (pickedLocation) {
      dispatch(saveMapImageUrl(mapPreviewUrlImage));
    }
  }, [pickedLocation]);

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview} mapImage={mapPreviewUrlImage}>
        <Text style={styles.text}>No location chosen yet!</Text>
      </MapPreview>
      <Button title="Get User Location" onPress={onHandlerGetLocation} color={COLORS.primary} />
    </View>
  );
};

export default LocationSelector;
