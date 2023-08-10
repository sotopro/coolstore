import { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { LocationSelector } from '../../../components';
import { mapsApi, useLazyGetGeocodingQuery } from '../../../store/maps/api';
import { useUpdateAddressMutation } from '../../../store/settings/api';
import { COLORS } from '../../../themes';

const CreateAddress = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();
  const [getGeolocation, { data, isError, isSuccess }] = useLazyGetGeocodingQuery();
  const onLocation = async ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandlerUpdateLocation = async () => {
    const { lat, lng } = location;
    const addressName = await getGeolocation({ lat, lng });
    updateAddress({ localId, address: addressName.data, location });
    navigation.goBack();
  };

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
