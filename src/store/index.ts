import { configureStore } from '@reduxjs/toolkit'

import tarefasRducer from './ Reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasRducer
  }
})

type RootReducer = ReturnType<typeof store.getState>

export default store
