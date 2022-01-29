import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IKitten} from 'types/kitten';
import {wWidth} from 'utils';

interface IProps {
  index: number;
  data: IKitten;
  onPress?: () => void;
}

function KittenCard({data, index, onPress}: IProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        marginLeft: index % 2 === 0 ? 0 : 16,
      }}>
      <Text style={styles.name}>{data.name}</Text>
      <Image source={{uri: data.image.uri}} style={styles.image} />
      <Text style={styles.info}>
        {data.info.length > 60 ? `${data.info.slice(0, 60)}...` : data.info}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wWidth / 2 - 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    marginTop: 4,
  },
  name: {fontSize: 16, fontWeight: '700'},
  info: {fontSize: 14, fontWeight: '400', color: 'grey', marginTop: 4},
});

export default KittenCard;
