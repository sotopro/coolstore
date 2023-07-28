import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 145,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailContainer: {
    justifyContent: 'space-between',
    width: 170,
    gap: 5,
  },
  name: {
    fontSize: 13,
    fontFamily: FONTS.medium,
  },
  price: {
    fontSize: 13,
    fontFamily: FONTS.bold,
  },
  qty: {
    fontSize: 12,
    fontFamily: FONTS.light,
  },
  stock: {
    fontSize: 12,
    fontFamily: FONTS.light,
  },
  actionContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  increaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secodary,
    borderRadius: 5,
  },
  increaseButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  decreaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  decreaseButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  deleteContainer: {},
});
