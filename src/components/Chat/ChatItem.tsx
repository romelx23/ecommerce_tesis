import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export const ChatItem = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.circleContainer}
            source={{
                uri:   'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5f/5fb4f0ef311f82d865d95dbf14e635e4c749d91c.jpg'
            }}
        />
      <View style={styles.contentMessage}>
        <Text style={styles.titleMessage}>Cristian Chipana</Text>
        <Text>Este es un mensaje</Text>
      </View>
      <Text>5:40pm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    contentMessage:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: '#ff9595',
        paddingLeft: 10,
        flex:1
    },
    circleContainer:{
        width: 60,
        height: 60,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleMessage:{
        fontSize: 15,
        fontWeight: 'bold',
    }
})