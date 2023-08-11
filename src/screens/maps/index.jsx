import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Maps } from '../../components';
import { COLORS } from '../../themes';

const MapsScreen = ({ navigation, route }) => {
  const { location } = route.params;

  console.warn({ location });

  const onPickedLocation = (coordinate) => {
    console.warn({ coordinate });
  };

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={styles.iconContainer} onPress={() => null}>
        <Ionicons name="ios-save-outline" size={24} color={COLORS.white} />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
      <Maps location={location} onPickedLocation={onPickedLocation} />
    </View>
  );
};

export default MapsScreen;
