import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from '../../store/cart/cart.slice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onIncreaseCartItem = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const onDecreaseCartItem = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeItemFromCart({ id }));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
            onRemoveCartItem={onRemoveCartItem}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => null} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPriceText}>USD {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
