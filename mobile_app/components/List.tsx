import { useEffect } from 'react'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const Card = (props: IDataGame) => {
  return (
    <View>
      <Image source={{ uri: props.thumbnail }} style={{ width: 100, height: 100 }} />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.short_description}</Text>
      </View>
    </View>
  )
}

export default Card
