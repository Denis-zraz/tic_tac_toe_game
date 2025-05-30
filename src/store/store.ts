import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import InAccountSlice from '../slices/InAccountSlice';
import GameUsersSlice from '../slices/GameUsersSlice';

const store = configureStore({
    reducer: {
        account: InAccountSlice,
        users: GameUsersSlice,
    },
});

setupListeners(store.dispatch);

export default store;
