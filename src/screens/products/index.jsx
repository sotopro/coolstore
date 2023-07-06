import { View, Text, Button } from 'react-native';

import { styles } from './styles';

function Product({ onHandleGoBack }) {
  return (
    <View style={styles.container}>
      <Button title="go back" onPress={onHandleGoBack} />
      <Text>Category selected</Text>
    </View>
  );
}

export default Product;
