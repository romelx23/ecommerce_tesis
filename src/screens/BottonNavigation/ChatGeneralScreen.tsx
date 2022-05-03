import { StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import ChatScreen from '../ChatGeneralScreen/ChatScreen/ChatScreen';
import { BottomNavigation } from 'react-native-paper';
import { MyChatScreen } from '../ChatGeneralScreen/MyChatScreen/MyChatScreen';
import { MyDarkTheme, MyTheme } from '../../Router/AppRouter';
import { themeContext } from '../../context/themeContext';

export const ChatGeneralScreen = () => {
    const { tema } = useContext(themeContext);
    const [index, setIndex] = useState(0);
    const [routes,setRoutes] = useState([
        { key: 'chat', title: 'Chat', icon: 'chat' },
        { key: 'mychat', title: 'MyChat', icon: 'credit-card' },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        chat: ChatScreen,
        mychat: MyChatScreen,
    });
  return (
    <BottomNavigation
        theme={tema ? MyDarkTheme : MyTheme}
        style={{width: '100%',height: '10%' }}
        navigationState={{
          index,
          routes
        }}
        onIndexChange={index => setIndex(index)}
        renderScene={renderScene}
      />
  )
}

const styles = StyleSheet.create({})