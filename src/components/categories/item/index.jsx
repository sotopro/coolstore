import { Image } from 'expo-image';
import { TouchableHighlight, Text, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';
import { blurhash } from '../../../utils/images';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style }) => {
  // const { width } = useWindowDimensions();

  // console.warn({ width });

  // const isTablet = width > 650;
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <Image
        source={{ uri: backgroundImage }}
        style={[styles.imageBackground, style]}
        contentFit="contain"
        transition={200}>
        <Text style={styles.categoryName}>{name}</Text>
      </Image>
    </TouchableHighlight>
  );
};

export default CategoryItem;
