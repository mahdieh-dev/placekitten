import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {IState} from 'data/Store';
import {NoInternet, Loading} from 'global';

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
  hasCached?: boolean;
  onConnectionRetore: () => void;
}

function ScreenProvider({
  isLoading,
  children,
  hasCached,
  onConnectionRetore,
}: IProps) {
  const notConnected = useSelector(
    (state: IState) => state.Application.notConnected,
  );

  return (
    <View style={styles.container}>
      {!notConnected && isLoading && <Loading />}
      {notConnected && !hasCached && (
        <NoInternet onConnectionRetore={onConnectionRetore} />
      )}
      {!isLoading && !notConnected && children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ScreenProvider;
