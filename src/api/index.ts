import { ConfigureStoreOptions, combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { hospiceSlice } from "./hospiceSlice";
import { referralSlice } from "./referralSlice";

const rootReducer = combineReducers({
  [authSlice.reducerPath]: authSlice.reducer,
  [hospiceSlice.reducerPath]: hospiceSlice.reducer,
  [referralSlice.reducerPath]: referralSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authSlice.middleware, 
      hospiceSlice.middleware,
      referralSlice.middleware
    )
} as ConfigureStoreOptions<typeof rootReducer, AnyAction>);
