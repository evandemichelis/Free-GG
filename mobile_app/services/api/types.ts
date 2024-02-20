import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type NativeStackParamList = {
  Home: undefined
  Games: undefined
  Settings: undefined
}

export type Props = NativeStackScreenProps<NativeStackParamList, 'Home' | 'Games' | 'Settings'>
