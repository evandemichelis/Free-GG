import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useLinkProps } from '@react-navigation/native'

export default function Home() {
  const [games, setGames] = useState([])
  useEffect(() => {
    fetchGames().then((response) => setGames(response.data))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free GG</Text>
      <ScrollView>
        {games.map((game, index) => (
          <Card key={index} {...game} />
        ))}
      </ScrollView>
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
