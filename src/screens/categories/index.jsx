import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

function Categories({ navigation }) {
  const { data, error, isLoading } = useGetCategoriesQuery();

  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', { categoryId, color, name });
  };

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
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
