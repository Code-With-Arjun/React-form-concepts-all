

import RootReducer from "../reducer/rootreducer";
import { createStore} from 'redux'
const store=createStore(RootReducer);

export default store;