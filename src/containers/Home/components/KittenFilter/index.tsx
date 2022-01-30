import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {styles} from './styles';

interface IProps {
  filterKittens: (count: number) => void;
}

function KittenFilter({filterKittens}: IProps) {
  const [dropdownValue, setDropdownValue] = React.useState<string | null>(null);
  const [isDropdownFocused, setIsDropdownFocused] = React.useState(false);
  const [customCount, setCustomCount] = React.useState('');

  const dropdownData = React.useMemo(
    () => [
      {label: '5', value: '5'},
      {label: '8', value: '8'},
      {label: '16', value: '16'},
      {label: 'Custom', value: 'Custom'},
    ],
    [],
  );

  React.useEffect(() => {
    if (!!dropdownValue && dropdownValue !== 'Custom') {
      filterKittens(parseInt(dropdownValue));
    }
  }, [dropdownValue]);

  const onFilterButtonPress = () => {
    filterKittens(parseInt(customCount));
  };
  return (
    <View style={styles.dropdownRow}>
      <Text style={styles.dropdownLabel}>{'Kittens count:'}</Text>
      <Dropdown
        style={[styles.dropdown, isDropdownFocused && {borderColor: '#db6702'}]}
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
      {dropdownValue === 'Custom' && (
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={setCustomCount}
            value={customCount}
            style={styles.kittenCountInput}
          />
          <TouchableOpacity
            onPress={onFilterButtonPress}
            style={styles.filterButton}>
            <Text style={styles.filterButtonLabel}>{'filter'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default KittenFilter;
