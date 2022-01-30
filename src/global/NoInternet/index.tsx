import {noInternet} from 'assets';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function NoInternet() {
  return (
    <View testID='no-internet-view' style={styles.container}>
      <Image source={noInternet} style={styles.image} />
      <Text style={styles.text}>{"Couldn't connect to the internet"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 100,
    paddingHorizontal: 32,
  },
  image: {width: 250, height: 250, resizeMode: 'contain'},
  text: {fontSize: 20, fontWeight: '700', color: 'grey'},
});

export default NoInternet;
