import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from '../interfaces';

const initialState: UsersState = {
    inAccount: false,
    userOne: {
        name: '',
        activeSymbol: '',
        activeGame: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
        ],
    },
    userTwo: {
        name: '',
        activeSymbol: '',
        activeGame: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
        ],
    },
};

const GameUsersSlice = createSlice({
    name: 'gameUsers',
    initialState,
    reducers: {
        toggleName(state, { payload }) {
            const { user, value } = payload;
            switch (user) {
                case 'userOne':
                    return {
                        ...state,
                        userOne: { ...state.userOne, name: value },
                    };
                case 'userTwo':
                    return {
                        ...state,
                        userTwo: { ...state.userTwo, name: value },
                    };
            }
        },
    },
});
export const { toggleName } = GameUsersSlice.actions;

export default GameUsersSlice.reducer;
