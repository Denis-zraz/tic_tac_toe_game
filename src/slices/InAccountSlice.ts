import { createSlice } from '@reduxjs/toolkit';
import { InAccount } from '../interfaces';

const initialState: InAccount = {
    inAccount: false,
};

const InAccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        toggleInAccount: (state, { payload }) => {
            state.inAccount = payload;
        },
    },
});

export const { toggleInAccount } = InAccountSlice.actions;
export default InAccountSlice.reducer;
