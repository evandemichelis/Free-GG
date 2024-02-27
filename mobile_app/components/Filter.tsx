import { useEffect } from 'react'
import IDataGame from '../interfaces/IDataGame'
import { Button, StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native'

const Categories = (props: IDataGame) => {
  return (
    <View style={styles.container}>
      <TextInput>caca</TextInput>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.category}>Filter</Text>
        </TouchableOpacity>
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: 'row',
    maxWidth: '100%',
    marginHorizontal: 10
  },
  content: {},
  category: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start'
  }
})

export default Categories
