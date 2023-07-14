import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

function Categories({ navigation }) {
  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', { categoryId, color, name });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({
                  categoryId: item.id,
                  color: item.backgroundColor,
                  name: item.name,
                })
              }
              style={orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
