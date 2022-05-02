import { View, Text } from 'react-native'
import React from 'react'
import { ChatActiveList } from '../../components/Chat/ChatActiveList';
import { ChatSearch } from '../../components/Chat/ChatSearch';
import { ChatList } from '../../components/Chat/ChatList';

export default function ChatScreen() {
  return (
    <View>
      <ChatActiveList/>
      <ChatSearch/>
      <ChatList/>
    </View>
  )
}