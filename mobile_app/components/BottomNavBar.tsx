import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const BottomNavBar = () => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Games</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Options</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  tab: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: 'white'
  }
})

export default BottomNavBar
