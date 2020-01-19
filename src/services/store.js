import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import users from './entities/users'
import logger from 'redux-logger'

const reducer = combineReducers({
    users,
})
const enhancers = composeWithDevTools(
    applyMiddleware(thunkMiddleware, logger)
)

const store = createStore(reducer, enhancers)

export default store

export * from './entities/users'
