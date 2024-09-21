import { configureStore } from '@reduxjs/toolkit';
import uesrReducer from './user'

export default configureStore({
    reducer: {
        user : uesrReducer
    },
});