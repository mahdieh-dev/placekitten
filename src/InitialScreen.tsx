import React from 'react';
import {StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import AppNavigator from 'navigation/AppNavigator';
import ApplicationSlice from 'data/Slices/ApplicationSlice';
import {Config} from 'api/config';

function InitialScreen() {
  const dispatch = useDispatch();

  NetInfo.configure({
    reachabilityUrl: `${Config.API_URL}/10/10?image=1`,
    reachabilityTest: async response => response.status === 200,
    reachabilityLongTimeout: 60 * 1000,
    reachabilityShortTimeout: 5 * 1000,
    reachabilityRequestTimeout: 15 * 1000,
    reachabilityShouldRun: () => true,
  });

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected || !state.isInternetReachable) {
        dispatch(ApplicationSlice.actions.setNotConnected(false));
      }
    });

    return unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InitialScreen;
