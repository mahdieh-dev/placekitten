import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {IKitten} from 'types/kitten';
import {useHeader, useKittyGenerator} from 'hooks';
import {KittenCard, KittenFilter} from './components';
import {ScreenProvider} from 'global';
import {initialNumberOfKittens} from 'hooks/useKittyGenerator';

type RootStackParamList = {
  HOME: undefined;
  KITTEN_DETAILS: {data: IKitten};
};
interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HOME'>;
}

function Home({navigation}: IProps) {
  const [kittensToShow, setKittensToShow] = React.useState<Array<IKitten>>([]);

  const {kittens} = useKittyGenerator();
  useHeader({title: 'Home'});

  React.useEffect(() => {
    if (kittens.length !== kittensToShow.length) {
      setKittensToShow(kittens);
    }
  }, [kittens]);

  const filterKittens = (count: number) => {
    if (count !== kittensToShow.length) {
      let controlledCount =
        count <= initialNumberOfKittens ? count : initialNumberOfKittens;
      setKittensToShow(kittens.slice(0, controlledCount));
    }
  };

  const navigateToKittenDetails = (kitten: IKitten) => {
    navigation.navigate('KITTEN_DETAILS', {data: kitten});
  };

  const renderKitten = React.useCallback((kitten: IKitten, index: number) => {
    return (
      <KittenCard
        data={kitten}
        index={index}
        onPress={() => navigateToKittenDetails(kitten)}
      />
    );
  }, []);

  return (
    <ScreenProvider isLoading={kittensToShow.length === 0}>
      <View style={styles.container}>
        <KittenFilter filterKittens={filterKittens} />
        <FlatList
          data={kittensToShow}
          numColumns={2}
          renderItem={({item, index}) => renderKitten(item, index)}
          keyExtractor={(_, index) => `kitten-${index}`}
          maxToRenderPerBatch={5}
          contentContainerStyle={styles.flatlistContentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'lightgray',
    paddingTop: 8,
  },
  flatlistContentContainer: {paddingBottom: 80},
});

export default Home;
