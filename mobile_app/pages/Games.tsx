import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'

export default function Home({ navigation, route }) {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames().then((response) => {
      setGames(response.data)
    })
  }, [])

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
