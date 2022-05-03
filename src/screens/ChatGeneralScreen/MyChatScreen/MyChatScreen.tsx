import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatActiveList } from '../../../components/Chat/ChatActiveList';
import { ChatSearch } from '../../../components/Chat/ChatSearch';
import { ChatList } from '../../../components/Chat/ChatList';

export const MyChatScreen = () => {
  return (
    <View style={{flex:1}}>
      <ChatActiveList/>
      <ChatSearch/>
      <ChatList/>
    </View>
  )
}

const styles = StyleSheet.create({})