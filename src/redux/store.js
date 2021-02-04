import { createStore } from 'redux'
import missions from './reducer'


const store = createStore(missions)

export default store