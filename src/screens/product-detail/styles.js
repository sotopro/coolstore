import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
  tagTitle: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  containerTags: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
  containerTag: {
    padding: 10,
    borderRadius: 10,
  },
  tag: {
    color: COLORS.white,
  },
});
