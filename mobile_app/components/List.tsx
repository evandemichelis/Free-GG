import { useEffect } from 'react'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const Card = (props: IDataGame) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <View>
          <Text style={styles.description}>{props.genre}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    maxWidth: '100%'
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
    fontSize: 20,
    maxWidth: 230,
    marginRight: 10
  },
  description: {
    color: 'black',
    fontSize: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start'
  }
})

export default Card
