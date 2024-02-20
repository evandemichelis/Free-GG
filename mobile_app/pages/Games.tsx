import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import BottomNavBar from '../components/BottomNavBar'
import React from 'react'
import { Props } from '../services/api/types'

export default function Games() {
  return <Text>games</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
