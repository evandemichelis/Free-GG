import { api } from '../api'

export const fetchGames = async () => {
  return await api.get('/games').then((response) => {
    return response.data
  })
}
