import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
  },
  preview: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  location: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONTS.bold,
  },
});
