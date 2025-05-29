import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import InAccountSlice from '../slices/InAccountSlice';

const store = configureStore({
    reducer: {
        account: InAccountSlice,
    },
});

setupListeners(store.dispatch);

export default store;
