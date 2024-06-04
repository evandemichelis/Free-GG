import { StatusBar } from 'expo-status-bar'
import IDataGame from '../interfaces/IDataGame'
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  Animated,
  ScrollView
} from 'react-native'
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
        <ScrollView style={styles.box}>
          {details && <Image style={styles.thumbnail} source={{ uri: details.thumbnail }}></Image>}
          <View style={styles.screenshot_container}>
            {details && <Image style={styles.screenshot} source={{ uri: details.screenshots?.[0].image }}></Image>}
            {details && <Image style={styles.screenshot} source={{ uri: details.screenshots?.[1].image }}></Image>}
          </View>
          {details && <Text style={styles.description}>{details.short_description}</Text>}
          <View>
            <View style={styles.infos_container1}>
              {details && <Text style={styles.infos1}>{details.genre}</Text>}
              {details && <Text style={styles.infos1}>Available on {details.platform}</Text>}
            </View>
            {details && <Image style={styles.thumbnail} source={{ uri: details.screenshots?.[2].image }}></Image>}
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
        </ScrollView>
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
    backgroundColor: '#1F2228',
    marginHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginBottom: 110
  },
  thumbnail: {
    objectFit: 'fill',
    marginTop: 7,
    marginLeft: 10,
    width: '96%',
    height: 220,
    borderRadius: 10,
    marginHorizontal: 4
  },
  screenshot_container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  screenshot: {
    objectFit: 'fill',
    marginTop: 7,
    width: '47%',
    height: 110,
    borderRadius: 10,
    marginHorizontal: 4
  },
  description: {
    marginTop: 5,
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingBottom: 5
  },
  infos_container1: {
    flexDirection: 'row',
    marginLeft: 14,
    paddingBottom: 4
  },
  infos1: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10
  },
  infos_container2: {
    marginHorizontal: 5,
    borderRadius: 10,
    paddingBottom: 6
  },
  infos2: {
    borderRadius: 10,
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5
  },
  link: {
    color: 'black',
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingLeft: 15,
    marginLeft: 115,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: '600',
    fontSize: 25,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black'
  }
})
