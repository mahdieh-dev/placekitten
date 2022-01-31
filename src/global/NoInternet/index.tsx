import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import {noInternet} from 'assets';
import {colors} from 'theme/colors';
import {adh, adw} from 'utils';
import ApplicationSlice from 'data/Slices/ApplicationSlice';

interface IProps {
  onConnectionRetore: () => void;
}
function NoInternet({onConnectionRetore}: IProps) {
  const dispatch = useDispatch();

  const checkIfConnectionIsRestored = async () => {
    try {
      const response = await NetInfo.fetch();
      if (response.isConnected) {
        dispatch(ApplicationSlice.actions.setNotConnected(false));
        onConnectionRetore();
      }
    } catch (error) {
      console.log('error of checking for network status restoration: ', error);
    }
  };
  return (
    <View testID="no-internet-view" style={styles.container}>
      <Image source={noInternet} style={styles.image} />
      <Text style={styles.text}>{"Couldn't connect to the internet"}</Text>
      <TouchableOpacity
        onPress={checkIfConnectionIsRestored}
        style={styles.button}>
        <Text style={styles.buttonLabel}>{'Retry'}</Text>
      </TouchableOpacity>
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
  button: {
    width: adw(60),
    height: adh(40),
    borderRadius: adw(8),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: adh(16),
  },
  buttonLabel: {fontSize: adw(16), fontWeight: '600', color: colors.white},
});

export default NoInternet;
