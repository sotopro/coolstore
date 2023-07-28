import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  orderHeaderContainer: {
    justifyContent: 'flex-start',
  },
  orderItemHeader: {
    fontFamily: FONTS.light,
    fontSize: 14,
    color: COLORS.text,
  },
  orderItemText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.text,
  },
  orderBody: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
