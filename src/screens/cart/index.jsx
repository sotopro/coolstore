import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { CartItem } from '../../components';
import CART from '../../constants/data/cart.json';

const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Cart;
