import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {adw} from 'utils';

export const styles = StyleSheet.create({
  dropdownRow: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'},
  dropdownLabel: {fontSize: adw(16), fontWeight: '700'},
  dropdown: {
    width: adw(100),
    height: adw(48),
    borderColor: colors.gray,
    borderWidth: adw(1),
    borderRadius: adw(8),
    paddingHorizontal: adw(8),
    marginLeft: adw(8),
    backgroundColor: colors.white_background,
  },
  dropdownContainer: {
    borderBottomLeftRadius: adw(8),
    borderBottomRightRadius: adw(8),
  },
  icon: {
    marginRight: adw(5),
  },
  iconStyle: {
    width: adw(20),
    height: adw(20),
  },
  selectedTextStyle: {
    fontSize: adw(16),
    fontWeight: '600',
  },
  kittenCountInput: {
    width: adw(50),
    height: adw(40),
    borderColor: colors.gray,
    borderWidth: adw(1),
    borderRadius: adw(8),
    paddingHorizontal: adw(8),
    marginLeft: adw(8),
    backgroundColor: colors.white_background,
    fontSize: adw(16),
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: adw(8),
    height: adw(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: adw(8),
    backgroundColor: colors.primary,
    marginLeft: adw(8),
    elevation: adw(16),
    shadowColor: colors.black,
  },
  filterButtonLabel: {
    fontSize: adw(16),
    fontWeight: '600',
    color: colors.white,
  },
  dropdownItemWrapper: {paddingVertical: adw(8), paddingHorizontal: adw(8)},
});
