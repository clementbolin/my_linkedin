import { createStore, applyMiddleware, Store } from 'redux'
// import { rootReducer } from '../reducers'
// import thunkMiddleware  from 'redux-thunk'
import { DispatchType, LoginAction } from '../reducers/types'
import { userReducer } from '../reducers/userReducer'
import thunk from 'redux-thunk'

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export const store: Store<any, LoginAction> & {
    dispatch: DispatchType
} = createStore(userReducer, applyMiddleware(thunk))