import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {adh, adw, wWidth} from 'utils';

export const styles = StyleSheet.create({
  container: {
    width: wWidth / 2 - adw(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: adh(16),
    borderRadius: adw(8),
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: adw(8),
    marginTop: adh(4),
  },
  name: {fontSize: adw(16), fontWeight: '700'},
  info: {
    fontSize: adw(14),
    fontWeight: '400',
    color: colors.gray,
    marginTop: adh(4),
  },
  skeletonContainer: {
    height: adh(220),
    borderWidth: 0,
  },
  skeletonName: {width: adw(80), height: adh(30), marginTop: adh(16)},
  skeletonImage: {
    width: wWidth / 2 - adw(24),
    height: adh(180),
    borderRadius: adw(8),
    marginTop: adh(4),
  },
  skeletonInfo: {
    width: wWidth / 2 - adw(24),
    height: adh(30),
    marginTop: adh(4),
  },
});
