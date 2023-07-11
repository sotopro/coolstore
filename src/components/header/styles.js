import { StyleSheet, StatusBar } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  tabletContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    fontFamily: FONTS.bold,
  },
  tabletTitle: {
    fontSize: 35,
    color: COLORS.text,
    fontFamily: FONTS.bold,
  },
});
