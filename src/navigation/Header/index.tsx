import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {adh, adw, sWidth} from 'utils';
import {colors} from 'theme/colors';

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
        color={colors.black}
        size={adw(24)}
        style={styles.menuIcon}
      />
      <Text style={styles.title}>{title}</Text>
      {backEnabled && (
        <Icon
          name="chevron-back-outline"
          color={colors.black}
          size={adw(24)}
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
    height: adh(56),
    backgroundColor: colors.primary,
    elevation: adw(8),
    shadowColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: adw(16),
  },
  title: {
    fontSize: adw(22),
    fontWeight: 'bold',
    color: colors.black,
  },
  menuIcon: {
    position: 'absolute',
    right: adw(16),
    top: adw(16),
  },
  backIcon: {
    position: 'absolute',
    left: adw(16),
    top: adw(16),
  },
});

export default Header;
