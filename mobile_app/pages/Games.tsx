import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useMyContext } from '../Context/Context'

export default function Home({ navigation, route }) {
  const [games, setGames] = useState([])
  const { platform, setPlatform } = useMyContext()

  useEffect(() => {
    fetchGames().then((response) => {
      const filteredGames = response.data.filter((game) => {
        return platform === 'All' || game.platform.includes(platform)
      })

      setGames(filteredGames)
    })
  }, [platform])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Games</Text>
      <FlatList
        data={games}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { GameID: item.id })}>
              <Card {...item} />
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 5
  }
})
