import { createStore, applyMiddleware, Store } from 'redux'
import { DispatchType, LoginAction } from '../reducers/types'
import { userReducer } from '../reducers/userReducer'
import thunk from 'redux-thunk'

export const store: Store<any, LoginAction> & {
    dispatch: DispatchType
} = createStore(userReducer, applyMiddleware(thunk))
