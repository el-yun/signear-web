import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateSessionPayload, SessionState } from '@/modules/session/types';

const initialState: SessionState = {
  accessToken: null,
  status: 'unknown',
};

const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    createSessionRequest: (state) => {
      state.status = 'unknown';
    },
    createSessionSuccess: (
      state,
      action: PayloadAction<CreateSessionPayload>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.status = 'loggedIn';
    },
  },
});

export default sessionSlice.reducer;

export const {
  createSessionRequest,
  createSessionSuccess,
} = sessionSlice.actions;
