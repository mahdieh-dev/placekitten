import React from 'react';

import {render} from 'utils/test';
import Home from '../index';

jest.mock('@react-navigation/core', () => ({
  useNavigation: () => ({
    setOptions: jest.fn(),
  }),
}));

jest.mock('@react-native-community/netinfo', () => ({
  fetch: () => false,
}));

jest.mock('hooks/useKittyGenerator', () => ({
  __esModule: true,
  default: ({}) => ({kittens: []}),
}));

describe('Home Test', () => {
  let navigation: any;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });

  it('should show NoInternet View while no internet', async () => {
    const {getByTestId} = render(<Home navigation={navigation} />, {
      Application: {
        notConnected: true,
      },
    });
    getByTestId('no-internet-view');
  });

  it('should show Loading View while no kittens to show', async () => {
    const {getByTestId} = render(<Home navigation={navigation} />, {
      Application: {
        notConnected: false,
      },
    });
    getByTestId('loading-view');
  });
});
