import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { styles } from './styles';
import { Input } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS } from '../../themes';

function Product({ navigation, route }) {
  const { categoryId, color } = route.params;
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];

    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredProducts(updatedProductList);
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  const onSelectProduct = ({ productId, uri }) => {
    navigation.navigate('ProductDetails', { productId, color, uri });
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity> */}
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        {search.length > 0 && (
          <Ionicons
            style={styles.clearIcon}
            onPress={clearSearch}
            name="close-circle"
            size={20}
            color={COLORS.black}
          />
        )}
      </View>
      <FlatList
        style={styles.products}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onSelectProduct({ productId: item.id, uri: item.image })}
            style={styles.productContainer}>
            <Animated.View sharedTransitionTag={item.id.toString()}>
              <Animated.Image
                source={{ uri: item.image }}
                style={[styles.productImage, { backgroundColor: color }]}
                resizeMethod="resize"
                resizeMode="contain"
                sharedTransitionTag={`product-${item.id.toString()}`}
              />
              <View style={styles.productDetail}>
                <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                  {item.name}
                </Text>
                <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.productsContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
}

export default Product;
