import React from 'react';
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/core';

import Header from 'navigation/Header';

interface IProps {
  title: string;
  backEnabled?: boolean;
  handleBackPress?: () => void;
}

export default function useHeader({
  title,
  backEnabled = false,
  handleBackPress,
}: IProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const options: NativeStackNavigationOptions = {
    headerShown: true,
    header: (props: NativeStackHeaderProps) => (
      <Header
        {...{
          ...props,
          title,
          backEnabled,
          handleBackPress,
        }}
      />
    ),
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation]);

  return null;
}
