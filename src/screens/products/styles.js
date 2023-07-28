import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
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
    paddingVertical: 25,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 10,
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
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
