import React, {JSXElementConstructor, ReactElement} from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {RootReducer, IState} from 'data/Store';

const flushMicroTaskQueue = () => new Promise(setImmediate);

const createMockStoreFunction = (preloadedState: IState) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));

const AllTheProviders =
  (preloadedState: IState) =>
  ({children}: {children: React.ReactNode}) =>
    (
      <Provider store={createMockStoreFunction(preloadedState)}>
        {children}
      </Provider>
    );

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  preloadedState: IState | {} = {},
  options = {},
) =>
  render(ui, {
    wrapper: AllTheProviders({
      ...preloadedState,
      Application: {
        notConnected: false,
      },
    }),
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render, flushMicroTaskQueue};
