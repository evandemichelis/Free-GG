import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'

export default function Settings() {
  const navigation = useNavigation()

  const [pcChecked, setPcChecked] = useState(false)
  const [browserChecked, setBrowserChecked] = useState(false)
  const [allChecked, setAllChecked] = useState(true)

  const handlePcChange = () => {
    setPcChecked(true)
    setBrowserChecked(false)
    setAllChecked(false)
  }

  const handleBrowserChange = () => {
    setPcChecked(false)
    setBrowserChecked(true)
    setAllChecked(false)
  }

  const handleAllChange = () => {
    setPcChecked(false)
    setBrowserChecked(false)
    setAllChecked(true)
  }

  const renderButton = (title, onPress, checked) => {
    return (
      <TouchableHighlight
        style={[styles.buttonContainer, checked ? styles.activeButton : styles.inactiveButton]}
        onPress={onPress}
        underlayColor="transparent"
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableHighlight>
    )
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          {renderButton(`PC ${pcChecked ? 'On' : 'Off'}`, handlePcChange, pcChecked)}
          {renderButton(`Browser ${browserChecked ? 'On' : 'Off'}`, handleBrowserChange, browserChecked)}
          {renderButton(`All ${allChecked ? 'On' : 'Off'}`, handleAllChange, allChecked)}
        </View>
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
    paddingTop: '45%',
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginVertical: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17
  },
  activeButton: {
    backgroundColor: 'navy'
  },
  inactiveButton: {
    backgroundColor: 'gray'
  }
})
