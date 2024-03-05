import { StatusBar } from 'expo-status-bar'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Dimensions, Animated } from 'react-native'
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
          <View style={styles.screenshot_container}>
            {details && <Image style={styles.screenshot} source={{ uri: details.thumbnail }}></Image>}
            {details && <Image style={styles.screenshot} source={{ uri: details.screenshots?.[0].image }}></Image>}
          </View>
          <View style={styles.screenshot_container}>
            {details && <Image style={styles.screenshot} source={{ uri: details.screenshots?.[1].image }}></Image>}
            {details && <Image style={styles.screenshot} source={{ uri: details.screenshots?.[2].image }}></Image>}
          </View>
          {details && <Text style={styles.description}>{details.short_description}</Text>}
          <View>
            <View style={styles.infos_container1}>
              {details && <Text style={styles.infos1}>{details.genre}</Text>}
              {details && <Text style={styles.infos1}>Available on {details.platform}</Text>}
            </View>
            <View style={styles.infos_container2}>
              {details && <Text style={styles.infos2}>Realised on {details.release_date}</Text>}
              {details && <Text style={styles.infos2}>Developed by {details.developer}</Text>}
              {details && <Text style={styles.infos2}>Published by {details.publisher}</Text>}
            </View>
            {details && (
              <TouchableOpacity onPress={() => Linking.openURL(details.game_url)}>
                <Text style={styles.link}>Play Now !</Text>
              </TouchableOpacity>
            )}
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
  screenshot_container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  screenshot: {
    objectFit: 'fill',
    marginTop: 10,
    width: '46%',
    height: 100,
    borderRadius: 5,
    marginHorizontal: 5
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
  infos_container1: {
    flexDirection: 'row'
  },
  infos1: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'justify',
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10
  },
  infos_container2: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 5
  },
  infos2: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 5,
    marginBottom: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10
  },
  link: {
    color: 'white',
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginLeft: 115,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: '600',
    fontSize: 30
  }
})
