import { createStore, applyMiddleware } from 'redux'
import User from './reducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  User,
    applyMiddleware(
      thunkMiddleware
    )
)

export default store