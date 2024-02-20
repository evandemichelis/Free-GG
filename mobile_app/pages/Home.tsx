import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'

export default function Home() {
  const [games, setGames] = useState([])
  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free GG</Text>
      <View>
        {games.map((game, index) => (
          <Card key={index} {...game} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 30
  }
})
