import { createSlice } from "@reduxjs/toolkit";

export interface Icount {
  value: number;
}

interface IPayload {
    payload: number;
}

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserCount: (state: Icount, action: IPayload) => {
      state.value = action.payload;
    },
  },
});

export const { setUserCount } = userSlice.actions;
export default userSlice.reducer;