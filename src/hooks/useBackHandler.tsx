import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {BackHandler} from 'react-native';

interface IProps {
  handleBackPress: () => boolean;
}

function useBackHandler({handleBackPress}: IProps) {
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, []),
  );

  return null;
}

export default useBackHandler;
