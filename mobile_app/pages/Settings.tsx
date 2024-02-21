import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.plateforme}>PC</Text>
          <Text style={styles.plateforme}>Browser</Text>
          <Text style={styles.plateforme}>All</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
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
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  box: {
    backgroundColor: 'navy',
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plateforme: {
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: '600',
    fontSize: 20
  }
})
