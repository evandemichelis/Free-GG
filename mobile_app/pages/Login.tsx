import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import BottomNavBar from '../components/BottomNavBar'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <BottomNavBar></BottomNavBar>
      <Text>J'aime les pâtes</Text>
      <Button title="Coucou" onPress={() => {}}></Button>
      <StatusBar style="auto" />
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
