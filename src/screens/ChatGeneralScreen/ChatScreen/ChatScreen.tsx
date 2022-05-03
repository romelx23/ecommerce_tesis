import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ChatActiveList } from '../../../components/Chat/ChatActiveList';
import { ChatSearch } from '../../../components/Chat/ChatSearch';
import { ChatList } from '../../../components/Chat/ChatList';
import { BottomNavigation } from 'react-native-paper';
import CartScreen from '../../CartScreen/CartScreen';
import { MyChatScreen } from '../MyChatScreen/MyChatScreen';
import { ListUsers } from '../../../components/Chat/ListUsers';

export default function ChatScreen() {
  
  return (
    <View>
      <ChatActiveList/>
      <ChatSearch/>
      <ListUsers/>
    </View>
  )
}