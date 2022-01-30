import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {IKitten} from 'types/kitten';
import {useHeader, useKittyGenerator} from 'hooks';
import {KittenCard, KittenFilter} from './components';
import {ScreenProvider} from 'global';
import {initialNumberOfKittens} from 'hooks/useKittyGenerator';
import {getCachedKittens, setCachedKittens} from 'data/Storage';
import {sHeight} from 'utils';

type RootStackParamList = {
  HOME: undefined;
  KITTEN_DETAILS: {data: IKitten};
};
interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HOME'>;
}

function Home({navigation}: IProps) {
  const [kittensToShow, setKittensToShow] = React.useState<Array<IKitten>>([]);
  const [disableFetching, setDisableFetching] = React.useState<boolean>(true);

  const {kittens} = useKittyGenerator({disableFetching});
  useHeader({title: 'Home'});

  React.useEffect(() => {
    checkIfCachedDataAvailable();
  }, []);

  React.useEffect(() => {
    if (kittens.length !== kittensToShow.length) {
      setKittensToShow(kittens);
      if (kittens.length === initialNumberOfKittens) {
        setCachedKittens(kittens);
      }
    }
  }, [kittens]);

  const checkIfCachedDataAvailable = async () => {
    try {
      const cachedKittens = await getCachedKittens();
      if (cachedKittens && cachedKittens.length !== 0) {
        setKittensToShow(cachedKittens);
        setDisableFetching(true);
      } else {
        setDisableFetching(false);
      }
    } catch (error) {
      console.warn('error of getCachedKittens: ', error);
    }
  };

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
  flatlistContentContainer: {paddingBottom: 80, minHeight: sHeight},
});

export default Home;
