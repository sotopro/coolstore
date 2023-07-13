import { NavigationContainer } from '@react-navigation/native';

import ShopNavigation from './shop';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
