import { TouchableHighlight, ImageBackground, Text } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
