import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IApplicationState {
  notConnected: boolean;
}

const initialState: IApplicationState = {
  notConnected: false,
};

const ApplicationSlice = createSlice({
  name: 'ApplicationSlice',
  initialState,
  reducers: {
    setNotConnected: (state, action: PayloadAction<boolean>) => {
      state.notConnected = action.payload;
    },
  },
});

export default ApplicationSlice;
