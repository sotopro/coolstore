import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { OrderItem } from '../../components';
import { useGetOrdersQuery } from '../../store/orders/api';
import { COLORS } from '../../themes';

const Orders = () => {
  const { data, error, isLoading } = useGetOrdersQuery();

  const renderItem = ({ item }) => <OrderItem {...item} />;

  const keyExtractor = (item) => item.id.toString();

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
