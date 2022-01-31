import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {noInternet} from 'assets';
import {colors} from 'theme/colors';
import {adh, adw} from 'utils';

function NoInternet() {
  return (
    <View testID="no-internet-view" style={styles.container}>
      <Image source={noInternet} style={styles.image} />
      <Text style={styles.text}>{"Couldn't connect to the internet"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: adh(100),
    paddingHorizontal: adw(32),
  },
  image: {width: adw(250), height: adw(250), resizeMode: 'contain'},
  text: {fontSize: adw(20), fontWeight: '700', color: colors.gray},
});

export default NoInternet;
