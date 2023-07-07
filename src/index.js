import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import { Header } from './components';
import { Categories, Products } from './screens';
import { COLORS } from './themes';

const categoryDefault = {
  categoryId: null,
  color: COLORS.primary,
};
export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  const onHandleSelectCategory = ({ categoryId, color }) => {
    setSelectedCategory({ categoryId, color });
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} style={{ backgroundColor: selectedCategory.color }} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
        ) : (
          <Categories onSelectCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
