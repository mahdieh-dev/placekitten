import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sWidth} from 'utils';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  title: string;
  backEnabled?: boolean;
  handleBackPress?: () => void;
}

function Header({title, backEnabled, handleBackPress}: IProps) {
  return (
    <View style={styles.container}>
      <Icon
        name="menu-outline"
        color={'#0b0b0b'}
        size={24}
        style={styles.menuIcon}
      />
      <Text style={styles.title}>{title}</Text>
      {backEnabled && (
        <Icon
          name="chevron-back-outline"
          color={'#0b0b0b'}
          size={24}
          style={styles.backIcon}
          onPress={handleBackPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: sWidth,
    height: 56,
    backgroundColor: '#db6702',
    elevation: 8,
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0b0b0b',
  },
  menuIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  backIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
});

export default Header;
