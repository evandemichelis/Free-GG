import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Games from '../pages/Games'
import Detail from '../pages/Detail'

const Stack = createNativeStackNavigator()

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailScreen" component={Detail} />
    </Stack.Navigator>
  )
}

export function GameStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GamesScreen" component={Games} />
      <Stack.Screen name="DetailScreen" component={Detail} />
    </Stack.Navigator>
  )
}
