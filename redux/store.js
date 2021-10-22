import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices'

export default configureStore({
  reducer: {
    basket:basketReducer
  },
})