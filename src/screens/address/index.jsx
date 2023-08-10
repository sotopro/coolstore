import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Address = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('CreateAddress');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
        <View style={styles.floatingButtonTextContainer}>
          <Text style={styles.floatingButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
