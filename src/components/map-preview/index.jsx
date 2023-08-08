import { View, Image } from 'react-native';

import { styles } from './styles';
import { URL_MAPS } from '../../constants/maps';

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrlImage = location ? URL_MAPS({ lat, lng, zoom: 15 }) : '';
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrlImage }} /> : children}
    </View>
  );
};

export default MapPreview;
