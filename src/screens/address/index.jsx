import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { LocationSelector } from '../../components';
import { GOOGLE_API_KEY, URL_BASE_GEOCODING } from '../../constants/maps';
import { useUpdateAddressMutation } from '../../store/settings/api';

const Address = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();
  const onLocation = async ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandlerUpdateLocation = () => {
    updateAddress({ localId, address, location });
    navigation.navigate('Settings');
  };

  useEffect(() => {
    if (location) {
      const getGeocoding = async () => {
        const response = await fetch(
          `${URL_BASE_GEOCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
        );

        const data = await response.json();

        if (!data.results) {
          throw new Error('Something went wrong!');
        }

        const address = data.results[0].formatted_address;

        setAddress(address);
      };

      getGeocoding();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
      <Button title="Confirm" onPress={onHandlerUpdateLocation} />
    </View>
  );
};

export default Address;
