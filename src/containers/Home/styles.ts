import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'lightgray',
    paddingTop: 8,
  },
  flatlistContentContainer: {paddingBottom: 80},
  dropdownRow: {flexDirection: 'row', alignItems: 'center'},
  dropdownLabel: {fontSize: 16, fontWeight: '700'},
  dropdown: {
    width: 150,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: 8,
    backgroundColor: '#f2f2f2',
  },
  dropdownContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
