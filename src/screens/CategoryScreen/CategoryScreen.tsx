import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsCategory } from '../../interfaces/home';

export default function CategoryScreen({ route, navigation }: PropsCategory) {
    const { params } = route;
    const { name } = params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})