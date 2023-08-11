import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { Address, CreateAddress, Maps, Profile, Settings } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
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
        headerLeft: () => (
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="CreateAddress"
        component={CreateAddress}
        options={{
          headerTitle: 'Create Address',
        }}
      />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
};

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
});

export default SettingsNavigator;
