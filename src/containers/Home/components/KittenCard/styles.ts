import {StyleSheet} from 'react-native';
import {wWidth} from 'utils';

export const styles = StyleSheet.create({
  container: {
    width: wWidth / 2 - 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    marginTop: 4,
  },
  name: {fontSize: 16, fontWeight: '700'},
  info: {fontSize: 14, fontWeight: '400', color: 'grey', marginTop: 4},
  skeletonContainer: {
    height: 220,
    borderWidth: 0,
  },
  skeletonName: {width: 80, height: 30, marginTop: 16},
  skeletonImage: {
    width: wWidth / 2 - 24,
    height: 180,
    borderRadius: 8,
    marginTop: 4,
  },
  skeletonInfo: {width: wWidth / 2 - 24, height: 30, marginTop: 4},
});
