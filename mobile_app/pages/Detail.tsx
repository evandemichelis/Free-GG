import { StatusBar } from 'expo-status-bar'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchGamesByID } from '../services/api/games/requests'

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
      <View style={styles.container}>{details && <Text style={styles.title}>{details.title}</Text>}</View>
      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.image_container}>
            {details && <Image style={styles.image} source={{ uri: details.thumbnail }}></Image>}
          </View>
          {details && <Text style={styles.description}>{details.short_description}</Text>}
          {details && (
            <Text style={styles.infos}>
              {details.genre} available on {details.platform}
            </Text>
          )}
          <View>
            {details && <Text style={styles.infos}>Realised on {details.release_date}</Text>}
            {details && <Text style={styles.infos}>Developed by {details.developer}</Text>}
            {details && <Text style={styles.infos}>Published by {details.publisher}</Text>}
          </View>
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
    borderRadius: 10
  },
  image_container: {
    alignItems: 'center'
  },
  image: {
    objectFit: 'fill',
    marginTop: 10,
    width: '95%',
    height: 200,
    borderRadius: 10
  },
  description: {
    marginTop: 10,
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 10,
    marginBottom: 10
  },
  infos: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'justify',
    marginLeft: 10,
    marginBottom: 10
  }
})
