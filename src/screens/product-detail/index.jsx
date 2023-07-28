import { Image } from 'expo-image';
import { useCallback } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { addToCart } from '../../store/cart/cart.slice';
import { useGetProductByIdQuery } from '../../store/products/api';
import { COLORS } from '../../themes';
import { blurhash } from '../../utils/images';

function ProductDetail({ navigation, route }) {
  const dispatch = useDispatch();
  const { color, productId } = route.params;
  const { data, isLoading, error } = useGetProductByIdQuery(productId);

  const product = data?.find((product) => product.id === productId);

  const onAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          placeholder={blurhash}
          contentFit="scale-down"
          transition={200}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>USD {product.price}</Text>
        <Text style={styles.tagTitle}>Tags</Text>
        <View style={styles.containerTags}>
          {product.tags.map((tag) => (
            <TouchableOpacity key={tag} style={[styles.containerTag, { backgroundColor: color }]}>
              <Text style={styles.tag}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetail;
