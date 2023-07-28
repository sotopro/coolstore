import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';
import { blurhash } from '../../../utils/images';

const CartItem = ({
  id,
  categoryId,
  name,
  price,
  image,
  currency,
  quantity,
  stock,
  onIncreaseCartItem,
  onDecreaseCartItem,
  onRemoveCartItem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          placeholder={blurhash}
          contentFit="scale-down"
          transition={200}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.qty}>{`qty: ${quantity} stock: ${stock}`}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={() => onIncreaseCartItem(id)}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecreaseCartItem(id)}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveCartItem(id)} style={styles.deleteButton}>
            <Ionicons name="trash" size={14} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
