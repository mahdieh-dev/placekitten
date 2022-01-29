import {Dimensions} from 'react-native';

const {width: wWidth, height: wHeight} = Dimensions.get('window');
const {width: sWidth, height: sHeight} = Dimensions.get('screen');

export {wWidth, wHeight, sWidth, sHeight};
