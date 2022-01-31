import {PixelRatio} from 'react-native';

import {sWidth, sHeight} from './constants';

export function getRandomInt(_min: number, _max: number) {
  return Math.round(Math.random() * (_max - _min) + _min);
}

function capFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomWidthHeightGenerator(
  _minSize: number,
  _maxSize: number,
): {width: number; height: number} {
  return {
    width: getRandomInt(_minSize, _maxSize),
    height: getRandomInt(_minSize, _maxSize),
  };
}

export function randomNameGenerator(length: number) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return capFirst(result);
}

function adjustWidth(value: number) {
  const designWidth = 392.7;
  return PixelRatio.roundToNearestPixel((value * sWidth) / designWidth);
}

function adjustHeight(value: number) {
  const designHeight = 807.2;
  return PixelRatio.roundToNearestPixel((value * sHeight) / designHeight);
}

export {adjustWidth as adw, adjustHeight as adh};
