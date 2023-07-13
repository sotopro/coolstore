import { useFonts } from 'expo-font';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Header } from './components';
import RootNavigation from './navigation';
import { Categories, Products } from './screens';
import { FONTS, COLORS } from './themes';

const categoryDefault = {
  categoryId: null,
  color: COLORS.primary,
};
export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
  });
  // const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  // const onHandleSelectCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };
  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefault);
  // };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={styles.container}>
  //       <Header title={headerTitle} style={{ backgroundColor: selectedCategory.color }} />
  //       {isCategorySelected ? (
  //         <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
  //       ) : (
  //         <Categories onSelectCategory={onHandleSelectCategory} />
  //       )}
  //     </View>
  //   </SafeAreaView>
  // );
  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
