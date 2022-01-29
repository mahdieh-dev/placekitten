import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

function Home({}: IProps) {
  return (
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
