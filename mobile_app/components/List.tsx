import IDataGame from '../interfaces/IDataGame'
import { StyleSheet, Text, View, Image } from 'react-native'

const mapPlatform = (platform) => {
  switch (platform) {
    case 'PC (Windows)':
      return 'PC'
    case 'Web Browser':
      return 'Browser'
    default:
      return platform
  }
}

const Card = (props: IDataGame) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.caracterisctics}>
          <Text style={styles.genre}>{props.genre}</Text>
          <Text style={styles.genre}>{mapPlatform(props.platform)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderRadius: 20,
    marginBottom: 15,
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
  caracterisctics: {},
  genre: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginRight: 10
  }
})

export default Card
