import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropdownRow: {flexDirection: 'row', alignItems: 'center'},
  dropdownLabel: {fontSize: 16, fontWeight: '700'},
  dropdown: {
    width: 100,
    height: 48,
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
  kittenCountInput: {
    width: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: 8,
    backgroundColor: '#f2f2f2',
    fontSize: 16,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#db6702',
    marginLeft: 8,
    elevation: 16,
    shadowColor: '#000',
  },
  filterButtonLabel: {fontSize: 16, fontWeight: '600', color: '#fff'},
  dropdownItemWrapper: {paddingVertical: 8, paddingHorizontal: 8},
});
