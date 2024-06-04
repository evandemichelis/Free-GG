import IDataGame from '../interfaces/IDataGame'
import { StyleSheet, Text, View, Image } from 'react-native'

const mapPlatform = (platform) => {
  switch (platform) {
    case 'PC (Windows)':
      return 'PC'
    case 'Web Browser':
      return 'Browser'
    case 'PC (Windows), Web Browser':
      return 'PC and Browser'
    default:
      return platform
  }
}

export default mapPlatform

const Card = (props: IDataGame) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.caracteristics}>
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
    maxHeight: 200,
    marginHorizontal: 10
  },
  image: {
    width: 180,
    height: '100%',
    borderRadius: 10,
    objectFit: 'fill'
  },
  content: {
    marginTop: 10,
    marginLeft: 10
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center'
  },
  caracteristics: {
    marginBottom: 10
  },
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
