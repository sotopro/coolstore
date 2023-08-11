import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Animated, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import SettingsNavigator from './settings';
import { Categories, Products, ProductDetail } from '../screens';
import { logout } from '../store/auth/auth.slice';
import { COLORS, FONTS } from '../themes';
const Stack = createNativeStackNavigator();

function ShopNavigator() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 80,
        },
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 16,
        },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom',
        headerRight: () => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('SettingsStack')}>
            <Ionicons name="settings-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={styles.icon} onPress={() => dispatch(logout())}>
            <Ionicons name="ios-log-out-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Platform.OS === 'android' ? 15 : 0,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  icon: {
    marginRight: Platform.OS === 'android' ? 15 : 0,
  },
});

export default ShopNavigator;
