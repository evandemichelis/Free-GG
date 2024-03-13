import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useMyContext } from '../Context/Context'

export default function Home({ navigation, route }) {
  const [games, setGames] = useState([])

  const getRandomGames = async () => {
    try {
      const response = await fetchGames()
      const fetchedGames = response.data
      let indexes: number[] = []

      for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * fetchedGames.length)
        while (indexes.includes(index)) {
          index = Math.floor(Math.random() * fetchedGames.length)
        }
        indexes.push(index)
      }

      const selectedGames = indexes.map((index) => fetchedGames[index])
      setGames(selectedGames)
      return Promise.resolve()
    } catch (error) {
      console.error('Error fetching games:', error)
      return Promise.reject(error)
    }
  }

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    getRandomGames().then(() => setRefreshing(false))
  }

  const { platform } = useMyContext()

  useEffect(() => {
    getRandomGames()
  }, [platform])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {games
          .filter((game) => platform === 'All' || game.platform.includes(platform))
          .map((game, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailScreen', { GameID: game.id })}>
              <Card key={index} {...game} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingBottom: 45
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 5
  }
})
