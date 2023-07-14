import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import PRODUCTS from '../../constants/data/products.json';

function ProductDetail({ navigation, route }) {
  const { color, productId } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);

  console.warn({ product });
  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
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
      </View>
    </View>
  );
}

export default ProductDetail;
