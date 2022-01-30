import AsyncStorage from '@react-native-async-storage/async-storage';

import {IKitten} from 'types/kitten';

const keys = {
  CACHED_KITTENS: 'CACHED_KITTENS',
};

export async function getCachedKittens() {
  const kittens = await AsyncStorage.getItem(keys.CACHED_KITTENS);
  return kittens && JSON.parse(kittens) ? JSON.parse(kittens) : [];
}

export function setCachedKittens(value: Array<IKitten>) {
  AsyncStorage.setItem(keys.CACHED_KITTENS, JSON.stringify(value));
}
