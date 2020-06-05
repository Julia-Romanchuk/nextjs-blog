import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Postsreduser from './redusers/postsReduser'
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper';

const rootReducer = combineReducers({
    Postsreduser
})

export type AppStateType = ReturnType<typeof rootReducer>

export const makeStore: MakeStore<AppStateType> = (context: Context) =>
  createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper<AppStateType>(makeStore, { debug: true });
