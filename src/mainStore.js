import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/reducer";
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
);

export default store;