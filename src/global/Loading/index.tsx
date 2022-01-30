import {loading} from 'assets';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Loading() {
  return (
    <View style={styles.loadingContainer}>
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
  image: {width: 100, height: 100, resizeMode: 'contain'},
  loadingLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: 'darkgrey',
    marginTop: 16,
  },
});

export default Loading;
