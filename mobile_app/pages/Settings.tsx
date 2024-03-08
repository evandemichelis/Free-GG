import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Settings() {
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>PC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Browser</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>
          </View>
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
    borderColor: 'white',
    backgroundColor: 'navy'
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
