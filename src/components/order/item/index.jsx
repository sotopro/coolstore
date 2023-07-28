import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';
import { formatCurrency } from '../../../utils/functions';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ id, total, createAt, items }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.orderItemContainer}>
      <View style={styles.orderBody}>
        <Text style={styles.orderItemHeader}>Order</Text>
        <Text style={styles.orderItemText}>{id}</Text>
        <Text style={styles.orderItemHeader}>Items</Text>
        <Text style={styles.orderItemText}>{items.length}</Text>
      </View>
      <View style={styles.orderHeaderContainer}>
        <Text style={styles.orderItemHeader}>Order placed</Text>
        <Text style={styles.orderItemText}>{formatDate(createAt)}</Text>
        <Text style={styles.orderItemHeader}>Total</Text>
        <Text style={styles.orderItemText}>USD {formatCurrency(total)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
