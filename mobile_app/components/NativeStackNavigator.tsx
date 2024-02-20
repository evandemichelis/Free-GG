import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Games from '../pages/Games'
import Settings from '../pages/Games'
import { NativeStackParamList } from '../services/api/types'

const Stack = createNativeStackNavigator<NativeStackParamList>()

export default function NativeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}
