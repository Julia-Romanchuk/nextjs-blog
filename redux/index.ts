//import { combineReducers, createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
//import Postsreduser from './redusers/postsReduser'
//import {MakeStore, createWrapper, Context} from 'next-redux-wrapper'
//import { composeWithDevTools } from 'redux-devtools-extension'
//
//const rootReducer = combineReducers({
//    Postsreduser
//})
//
//export type AppStateType = ReturnType<typeof rootReducer>
//
//export const makeStore: MakeStore<AppStateType> = (context: Context) =>
//  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//
//export const wrapper = createWrapper<AppStateType>(makeStore, { debug: true });

import { useMemo } from 'react'
import { combineReducers, createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Postsreduser from './redusers/postsReduser'

let store: Store<AppStateType>

const rootReducer = combineReducers({
    Postsreduser
})

export type AppStateType = ReturnType<typeof rootReducer>

function initStore(initialState: AppStateType) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState: AppStateType) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
