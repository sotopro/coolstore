import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';
import PRODUCTS from '../../constants/data/products.json';

function ProductDetails({ navigation, route }) {
  const { productId, color } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const gesture = Gesture.Pan()
    .onUpdate((value) => {
      translateX.value = value.translationX * 0.8;
      translateY.value = value.translationY * 0.8;
      const distance = Math.sqrt(
        value.translationX * value.translationY + value.translationY * value.translationY
      );
      const scaleValue = Math.min(Math.max(distance / 100, 1), 0.9);
      scale.value = withTiming(scaleValue, { duration: 100 });
    })
    .onEnd(() => {
      if (translateY.value > 50) {
        opacity.value = 0;
        runOnJS(navigation.goBack)();
      } else {
        translateX.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(0, { duration: 300 });
        scale.value = withTiming(1, { duration: 300 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    backgroundColor: interpolateColor(opacity.value, [0, 1], ['transparent', 'white']),
    borderRadius: 20,
    overflow: 'hidden',
  }));
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyle]} sharedTransitionTag={product.id}>
        <View style={[styles.header, { backgroundColor: color }]}>
          <Animated.Image
            source={{ uri: product.image }}
            style={styles.image}
            sharedTransitionTag={`product-${product.id.toString()}`}
            resizeMode="contain"
          />
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

export default ProductDetails;
