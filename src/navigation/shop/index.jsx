import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, ProductDetails, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false, presentation: 'transparentModal' }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
