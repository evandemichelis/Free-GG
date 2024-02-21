import { Button, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchGames } from '../services/api/games/requests'
import Card from '../components/List'
import { useLinkProps } from '@react-navigation/native'

export default function Home() {
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
          return <Card {...item} />
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
