import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export const ChatCircleItem = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.circleContainer}
            source={{
                uri:   'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5f/5fb4f0ef311f82d865d95dbf14e635e4c749d91c.jpg'
            }}
        />
      <Text>Juan</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:60,
        marginLeft: 15,
    },
    circleContainer:{
        width: 60,
        height: 60,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})