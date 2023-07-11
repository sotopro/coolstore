import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
  const { width } = useWindowDimensions();

  const isTablet = width > 650;
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={isTablet ? styles.imageBackgroundTablet : styles.imageBackground}
        resizeMode={isTablet ? 'contain' : 'cover'}>
        <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
