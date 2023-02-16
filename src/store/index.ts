import { configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import eventReducer from "./reducers/event";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
  },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
