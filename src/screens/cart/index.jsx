import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Cart;
