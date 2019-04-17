import { applyMiddleware, compose, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers/root";

export default function configureStore(initialState) {
  const addSupportForReduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    addSupportForReduxDevTools(applyMiddleware(reduxImmutableStateInvariant()))
  );
}