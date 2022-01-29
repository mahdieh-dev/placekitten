import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IApplicationState {
  notConnected: Boolean;
}

const initialState: IApplicationState = {
  notConnected: false,
};

const ApplicationSlice = createSlice({
  name: 'ApplicationSlice',
  initialState,
  reducers: {
    setNotConnected: (state, action: PayloadAction<Boolean>) => {
      state.notConnected = action.payload;
    },
  },
});

export default ApplicationSlice;
