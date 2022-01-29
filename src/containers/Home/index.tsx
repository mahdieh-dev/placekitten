import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {IKitten} from 'types/kitten';
import {useHeader, useKittyGenerator} from 'hooks';
import {KittenCard} from './components';

interface IProps {}

function Home({}: IProps) {
  const {kittens} = useKittyGenerator();
  useHeader({title: 'Home'});

  const renderKitten = (kitten: IKitten, index: number) => {
    return <KittenCard data={kitten} index={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={kittens}
        numColumns={2}
        renderItem={({item, index}) => renderKitten(item, index)}
        keyExtractor={(_, index) => `kitten-${index}`}
        maxToRenderPerBatch={5}
        removeClippedSubviews
        contentContainerStyle={styles.flatlistContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'lightgray',
    paddingTop: 8
  },
  flatlistContentContainer: {paddingBottom: 80},
});

export default Home;
