import { Ionicons } from '@expo/vector-icons';
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  launchCameraAsync,
  requestCameraPermissionsAsync,
} from 'expo-image-picker';
import { useState } from 'react';
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes';

const ImageSelector = ({ profileImage, onSelect }) => {
  const [image, setImage] = useState(null);
  const verifyPermissions = async () => {
    // const { status } = await requestMediaLibraryPermissionsAsync();
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant camera permissions to use this app.', [
        { text: 'Okay' },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    // const isMediaPermission = await verifyPermissions();
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;
    // const result = await launchImageLibraryAsync({
    //   mediaTypes: 'Images',
    //   allowsEditing: true,
    //   aspect: [16, 9],
    //   quality: 0.5,
    // });
    const result = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
      base64: true,
    });

    await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    setImage(result.assets[0].uri);
    console.log({ assets: result.assets });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
        {image || profileImage ? (
          <Image source={{ uri: image || profileImage }} style={styles.image} resizeMode="cover" />
        ) : (
          <Ionicons name="ios-camera" size={24} color={COLORS.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
