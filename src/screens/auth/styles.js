import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    minHeight: 350,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  header: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.text,
    paddingVertical: 10,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.secodary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
  },
});
