import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useMyContext } from '../Context/Context'

export default function Home({ navigation, route }) {
  const [games, setGames] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const { platform } = useMyContext()

  const getRandomGames = async () => {
    try {
      const response = await fetchGames()

      const filteredGames = response.data.filter((game) => platform === 'All' || game.platform.includes(platform))

      const selectedGames =
        filteredGames.length >= 10
          ? getRandomSubset(filteredGames, 10)
          : getRandomSubset(filteredGames.concat(filteredGames), 10)

      setGames(selectedGames)
      return Promise.resolve()
    } catch (error) {
      console.error('Error fetching games:', error)
      return Promise.reject(error)
    }
  }

  const getRandomSubset = (array, size) => array.sort(() => 0.5 - Math.random()).slice(0, size)

  const onRefresh = () => {
    setRefreshing(true)
    getRandomGames().then(() => setRefreshing(false))
  }

  useEffect(() => {
    getRandomGames()
  }, [platform])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {games.map((game, index) => (
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
