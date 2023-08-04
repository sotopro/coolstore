import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 35,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: FONTS.regular,
    marginBottom: 5,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  error: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    paddingVertical: 5,
    color: COLORS.error,
  },
});
