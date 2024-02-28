import { StatusBar } from 'expo-status-bar'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchGamesByID } from '../services/api/games/requests'
import DetailID from '../components/DetailID'

export default function Detail({ navigation, route }) {
  const { GameID } = route.params
  const [details, setDetails] = useState<IDataGame | null>(null)

  useEffect(() => {
    fetchGamesByID(GameID).then((response) => {
      setDetails(response.data)
    })
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{GameID}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.plateforme}>Details</Text>
          {details && <Text style={styles.plateforme}>{details.genre}</Text>}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 5
  },
  body: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%'
  },
  box: {
    backgroundColor: 'navy',
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  plateforme: {
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: '600',
    fontSize: 20
  }
})
