import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import BottomNavBar from '../components/BottomNavBar'
import React from 'react'
import { Props } from '../services/api/types'

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Coucou"
        onPress={() => {
          ;('Games')
        }}
      ></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
