import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { MenuItem } from '../../components';
import { MENUS } from '../../constants/data/menus';

const Settings = ({ navigation }) => {
  const onSelect = ({ route }) => {
    navigation.navigate(route);
  };
  const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect} />;
  const keyExtractor = (item) => item.id;
  return (
    <View style={styles.container}>
      <FlatList
        data={MENUS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.settingList}
      />
    </View>
  );
};

export default Settings;
