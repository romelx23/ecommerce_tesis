import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GeneratePdf } from '../../../components/GeneratePdf/GeneratePdf'

export const InventaryScreen = () => {
  return (
    <View style={styles.containerInventary}>
      <Text style={styles.inventaryTitle}>Inventario General</Text>
      <GeneratePdf/>
    </View>
  )
}

const styles = StyleSheet.create({
  containerInventary:{
    display: 'flex',
    padding: 10,
  },
  inventaryTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  }
})