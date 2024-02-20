import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Home from './pages/Home'
import Games from './pages/Games'
import Settings from './pages/Settings'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const AppStack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <AppStack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Home':
                return focused ? (
                  <Ionicons name="home" size={size} color={color} />
                ) : (
                  <Ionicons name="home-outline" size={size} color={color} />
                )
              case 'Games':
                return focused ? (
                  <Ionicons name="game-controller" size={size} color={color} />
                ) : (
                  <Ionicons name="game-controller-outline" size={size} color={color} />
                )
              case 'Settings':
                return focused ? (
                  <Ionicons name="settings" size={size} color={color} />
                ) : (
                  <Ionicons name="settings-outline" size={size} color={color} />
                )
              default:
                return focused ? (
                  <Ionicons name="square" size={size} color={color} />
                ) : (
                  <Ionicons name="square-outline" size={size} color={color} />
                )
            }
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Games" component={Games} />
        <AppStack.Screen name="Settings" component={Settings} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
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
