import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { products } from './Products';
import { ItemCart } from './ItemCart';


export default function ListCart() {
  return (
    <FlatList
        style={{ flex: 1 }}
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(category) => category?.id!.toString()}
        renderItem={({ item }) => <ItemCart item={item}/>}
        />
  )
}

const styles = StyleSheet.create({

})