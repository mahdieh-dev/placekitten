import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IKitten} from 'types/kitten';
import {wWidth} from 'utils';

interface IProps {
  index: number;
  data: IKitten;
}

function KittenCard({data, index}: IProps) {
  return (
    <View
      style={{
        ...styles.container,
        marginLeft: index % 2 === 0 ? 0 : 16,
      }}>
      <Image source={{uri: data.image.uri}} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wWidth / 2 - 24,
    maxHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  image: {width: '100%', height: 180, resizeMode: 'cover', borderRadius: 8},
  name: {fontSize: 16, fontWeight: '700'},
});

export default KittenCard;
