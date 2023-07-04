import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { CategoryItem, Header } from './components';
import CATEGORIES from './constants/data/categories.json';

export default function App() {
  const onSelectCategory = (categoryId) => {
    console.warn({ categoryId });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={onSelectCategory} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  listCategory: {
    gap: 15,
    paddingBottom: 20,
  },
});
