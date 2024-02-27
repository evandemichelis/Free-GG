import { api } from '../api'

export const fetchGames = async () => {
  return await api.get('/games').then((response) => {
    return response
  })
}

export const fetchGamesByID = async (id) => {
  return await api.get(`/game?id=${id}`).then((response) => {
    return response
  })
}
