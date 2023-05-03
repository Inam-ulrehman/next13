import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './features/users/usersSlice'
import carsSlice from './features/cars/carsSlice'

const store = configureStore({
  reducer: {
    users: usersSlice,
    cars: carsSlice,
  },
})

export default store
