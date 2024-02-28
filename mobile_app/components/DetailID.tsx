import { useEffect } from 'react'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const DetailID = (props: IDataGame) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <View>
          <Text style={styles.genre}>{props.genre}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderRadius: 20,
    marginBottom: 13,
    flexDirection: 'row',
    maxWidth: '100%',
    marginHorizontal: 10
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
    objectFit: 'fill'
  },
  content: {
    marginTop: 10,
    marginLeft: 10
  },
  title: {
    color: 'white',
    fontSize: 18,
    maxWidth: 230,
    marginRight: 10,
    fontWeight: '600'
  },
  genre: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start'
  }
})

export default Card
