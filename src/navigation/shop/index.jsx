import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, ProductDetails, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
