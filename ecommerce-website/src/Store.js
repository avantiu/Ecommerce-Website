import { createStore } from "redux";
import rootReducer from "./component/redux/reducer/Main";

let store = createStore(rootReducer)

export default store