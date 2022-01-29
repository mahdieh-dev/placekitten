import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

function KittenDetails({}: IProps) {
  return (
    <View style={styles.container}>
      <Text>{'Kitten Details Screen'}</Text>
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

export default KittenDetails;
