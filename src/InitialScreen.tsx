import React from 'react';
import {StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import AppNavigator from 'navigation/AppNavigator';
import ApplicationSlice from 'data/Slices/ApplicationSlice';
import {Config} from 'api/config';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    checkInternetConnectivity();
  }, []);

  const checkInternetConnectivity = React.useCallback(async () => {
    const response = await NetInfo.fetch();
    dispatch(ApplicationSlice.actions.setNotConnected(!!!response.isConnected));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InitialScreen;
