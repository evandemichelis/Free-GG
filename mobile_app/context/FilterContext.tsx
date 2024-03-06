// StoreContext.js
import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  games: [],
  sortedGames: [],
  selectedPlatform: 'All'
}

const StoreContext = createContext()

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return { ...state, games: action.payload, sortedGames: action.payload }
    case 'SORT_GAMES':
      const sortedGames = [...state.games].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
      return { ...state, sortedGames }
    case 'SET_SELECTED_PLATFORM':
      return { ...state, selectedPlatform: action.payload }
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  const updateGlobalState = (action) => {
    dispatch(action)
  }

  return <StoreContext.Provider value={{ state, updateGlobalState }}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
