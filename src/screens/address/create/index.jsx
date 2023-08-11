import { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { LocationSelector } from '../../../components';
import { URL_MAPS } from '../../../constants/maps';
import { insertPlace } from '../../../db';
import { mapsApi, useLazyGetGeocodingQuery } from '../../../store/maps/api';
import { useUpdateAddressMutation } from '../../../store/settings/api';
import { COLORS } from '../../../themes';

const CreateAddress = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const mapImageUrl = useSelector((state) => state.address.mapImageUrl);
  const [location, setLocation] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();
  const [getGeolocation] = useLazyGetGeocodingQuery();
  const onLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandlerUpdateLocation = async () => {
    const { lat, lng } = location;
    const addressName = await getGeolocation({ lat, lng });
    const result = await insertPlace({
      address: addressName.data,
      coords: location,
      image: mapImageUrl,
    });
    updateAddress({ localId, address: addressName.data, location });
    console.warn({ result });
    navigation.goBack();
  };

  const onSelectMap = async () => {
    navigation.navigate('Maps', { location });
  };

  useEffect(() => {
    if (location) {
      navigation.navigate('Maps', { location });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
      <View style={styles.buttonContainer}>
        <Button title="Confirm" onPress={onHandlerUpdateLocation} color={COLORS.secodary} />
      </View>
    </View>
  );
};

export default CreateAddress;
