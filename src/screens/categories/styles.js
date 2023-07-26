import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  listCategory: {
    gap: 15,
    paddingBottom: 20,
  },
  categoryItemLandscape: {
    height: 100,
  },
});
