import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {IKitten} from 'types/kitten';
import {useHeader, useKittyGenerator} from 'hooks';
import {KittenCard} from './components';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {IState} from 'data/Store';
import {NoInternet} from 'global';

interface IProps {}

function Home({}: IProps) {
  const [dropdownValue, setDropdownValue] = React.useState(null);
  const [isDropdownFocused, setIsDropdownFocused] = React.useState(false);

  const notConnected = useSelector(
    (state: IState) => state.Application.notConnected,
  );

  const {kittens} = useKittyGenerator();
  useHeader({title: 'Home'});

  const [kittensToShow, setKittensToShow] = React.useState<Array<IKitten>>([]);

  const dropdownData = React.useMemo(
    () => [
      {label: '5', value: '5'},
      {label: '8', value: '8'},
      {label: '16', value: '16'},
    ],
    [],
  );

  React.useEffect(() => {
    if (kittens.length !== kittensToShow.length) {
      setKittensToShow(kittens);
    }
  }, [kittens]);

  React.useEffect(() => {
    if (!!dropdownValue && parseInt(dropdownValue) !== kittensToShow.length) {
      setKittensToShow(kittens.slice(0, parseInt(dropdownValue)));
    }
  }, [dropdownValue]);

  const renderKitten = (kitten: IKitten, index: number) => {
    return <KittenCard data={kitten} index={index} />;
  };

  if (notConnected) {
    return <NoInternet />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.dropdownRow}>
        <Text style={styles.dropdownLabel}>{'Kittens count:'}</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isDropdownFocused && {borderColor: '#db6702'},
          ]}
          placeholderStyle={styles.selectedTextStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={dropdownData}
          maxHeight={160}
          containerStyle={styles.dropdownContainer}
          labelField="label"
          valueField="value"
          placeholder={!isDropdownFocused ? 'All' : '...'}
          value={dropdownValue}
          onFocus={() => setIsDropdownFocused(true)}
          onBlur={() => setIsDropdownFocused(false)}
          onChange={item => {
            setDropdownValue(item.value);
            setIsDropdownFocused(false);
          }}
        />
      </View>
      <FlatList
        data={kittensToShow}
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

export default Home;
