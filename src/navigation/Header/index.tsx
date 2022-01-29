import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sWidth} from 'utils';

interface IProps {}

function Header({}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: sWidth,
    height: 56,
    backgroundColor: '#db6702',
    elevation: 8,
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
