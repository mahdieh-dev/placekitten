import React from 'react';

import {render} from 'utils/test';
import Home from '../index';

jest.mock('@react-navigation/core', () => ({
  useNavigation: () => ({
    setOptions: jest.fn(),
  }),
}));

describe('Home Test', () => {
  let navigation: any;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });
  it('should render the kittens correctly', async () => {
    const maxNumberOfKittens = 16;

    const {getAllByTestId} = render(<Home navigation={navigation} />, {
      Application: {
        noConnected: false,
      },
    });

    const kittens = getAllByTestId(/kitten-card/);
    expect(kittens).toHaveLength(maxNumberOfKittens);
  });
});
