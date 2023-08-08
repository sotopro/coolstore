import { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { LocationSelector } from '../../components';

const Address = () => {
  const [location, setLocation] = useState(null);

  const onLocation = () => {
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
    </View>
  );
};

export default Address;
