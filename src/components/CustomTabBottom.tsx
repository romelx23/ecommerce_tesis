import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screens/FavoriteScreen/FavoriteScreen";
import ChatScreen from "../screens/ChatGeneralScreen/ChatScreen/ChatScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import { Icon, Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { MyChatScreen } from '../screens/ChatGeneralScreen/MyChatScreen/MyChatScreen';
type RouteList = "home" | "favorite" | "chat" | "CartScreen";

export default function CustomTabBottom() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();

  // const handleRoute = (routeName: RouteList) => {
  //     navigation.navigate(routeName);
  // }
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#4f19ff",
          // tabBarInactiveBackgroundColor: "#6e3fda",
          tabBarItemStyle: {
            display: "flex",
          },
          tabBarIcon: ({ focused, color }) => (
            <Icon name="chat" size={25} color={focused ? color : "#ffffff"} />
          ),
          tabBarLabel: () => <Text style={{...style.tabBarLabel}}>Usuarios</Text>,
        }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#4f19ff",
          // tabBarInactiveBackgroundColor: "#6e3fda",
          tabBarItemStyle: {
            display: "flex",
          },
          tabBarIcon: ({ focused, color }) => (
            <Icon name="chat" size={25} color={focused ? color : "#ffffff"} />
          ),
          tabBarLabel: () => <Text style={{...style.tabBarLabel}}>Mis Chats</Text>,
        }}
        name="Cart"
        component={MyChatScreen}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  //   TabContainer:{
  //       position:'absolute',
  //       bottom:0,
  //       flexDirection:'row',
  //       justifyContent:'space-around',
  //       alignItems:'center',
  //       backgroundColor:'#4f6ba7',
  //       padding:10,
  //   },
  // button: {
  //   flexDirection: "row",
  //   padding: 20,
  //   backgroundColor: "#47abee",
  //   borderBottomColor: "#222",
  //   borderWidth: 1,
  //   margin: 10,
  //   borderRadius: 20,
  // },
  tabBarLabel: {
    // color: '#292929',
    color: '#ffffff',
    fontSize: 12,
},
});
