import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useLinkProps } from '@react-navigation/native'

export default function Home() {
  const [games, setGames] = useState([])

  const getRandomGames = async () => {
    try {
      const response = await fetchGames()
      const fetchedGames = response.data
      let indexes = []
      for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * fetchedGames.length)
        while (indexes.includes(index)) {
          index = Math.floor(Math.random() * fetchedGames.length)
        }
        indexes.push(index)
        setGames((prev) => [...prev, fetchedGames[index]])
      }
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }

  useEffect(() => {
    getRandomGames()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
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
    backgroundColor: 'black',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30
  }
})
