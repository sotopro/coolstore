import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../themes';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  products: {
    flex: 1,
    gap: 15,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  notFoundText: {},
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
  },
  productsContent: {
    paddingVertical: 20,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: width / 2 - 20,
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productDetail: {
    padding: 10,
    gap: 5,
  },
  productName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
