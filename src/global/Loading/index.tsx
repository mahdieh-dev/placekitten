import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {loading} from 'assets';
import {colors} from 'theme/colors';
import {adw} from 'utils';

function Loading() {
  return (
    <View testID="loading-view" style={styles.loadingContainer}>
      <Image source={loading} style={styles.image} />
      <Text style={styles.loadingLabel}>{'Loading...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    paddingTop: '60%',
    alignItems: 'center',
  },
  image: {width: adw(100), height: adw(100), resizeMode: 'contain'},
  loadingLabel: {
    fontSize: adw(20),
    fontWeight: '700',
    color: colors.dark_gray,
    marginTop: adw(16),
  },
});

export default Loading;
