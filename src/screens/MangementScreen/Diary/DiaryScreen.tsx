import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardDiary } from '../../../components/Management/CardDiary';

export const DiaryScreen = () => {
  return (
    <View style={styles.containerCards}>
      <CardDiary name='Clientes' quantity={20}/>
      <CardDiary name='Productos' quantity={40}/>
      <CardDiary name='Compras' quantity={60}/>
      <CardDiary name='Ventas' quantity={80}/>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCards:{
    display: 'flex',
    flexDirection: 'column',
  }
})