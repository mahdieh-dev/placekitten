import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import store from 'data/Store';
import InitialScreen from 'InitialScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <InitialScreen />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
