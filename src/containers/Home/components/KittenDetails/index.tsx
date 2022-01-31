import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useBackHandler, useHeader} from 'hooks';
import {colors} from 'theme/colors';
import {IKitten} from 'types/kitten';
import {adh, adw} from 'utils';

type RootStackParamList = {
  KITTEN_DETAILS: undefined;
  HOME: undefined;
};
interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'KITTEN_DETAILS'>;
}

function KittenDetails({navigation}: IProps) {
  const route: RouteProp<{
    params: {data: IKitten};
  }> = useRoute();

  const data = React.useMemo(() => route.params.data, [route.params.data]);

  const handleBackPress = React.useCallback(() => {
    navigation.navigate('HOME');
    return true;
  }, []);

  useHeader({title: `${data.name} Kitten`, backEnabled: true, handleBackPress});
  useBackHandler({handleBackPress});

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: data.image.uri}} style={styles.image} />
      <View style={styles.contentsWrapper}>
        <Text style={styles.info}>{data.info}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {width: '100%', height: adh(300)},
  contentsWrapper: {paddingHorizontal: adw(16), paddingTop: adh(16)},
  info: {
    fontSize: adw(14),
    color: colors.black,
    marginTop: adh(8),
    textAlign: 'justify',
  },
});

export default KittenDetails;
