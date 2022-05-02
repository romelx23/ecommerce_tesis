import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

export const ChatSearch = () => {
  return (
    <View style={styles.contentInput}>
        <Icon
            name="search"
            type="material"
            color="#b5b5b5"
            size={20}
        />
      <TextInput
        style={styles.input}
        placeholder="Buscar en el chat"
        placeholderTextColor="grey"
        onChangeText={(text) => console.log(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    contentInput:{
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 50,
        borderColor: 'transparent',
        flex:1,
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
})