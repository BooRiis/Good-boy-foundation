import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../features/formSlice'

export default configureStore({
  reducer
})