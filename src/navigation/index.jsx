import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ShopNavigation from './shop';

const RootNavigation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ShopNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigation;
