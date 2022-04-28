import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import CartScreen from "../screens/CartScreen/CartScreen";
import { PropsNavigationHome } from '../interfaces/home';
import { TouchableOpacity } from "react-native-gesture-handler";
import AppRouter from "../Router/AppRouter";
type RouteList='home'|'favorite'|'chat'|'CartScreen';

export default function CustomTabBottom() {
    const Tab = createBottomTabNavigator();

    // const handleRoute = (routeName: RouteList) => {
    //     navigation.navigate(routeName);
    // }
  return (
    // <View style={style.TabContainer}>
    //     <View style={style.button}>
    //         <TouchableOpacity onPress={()=>handleRoute('home')}><Text>Home</Text></TouchableOpacity> 
    //     </View>
    //     <View style={style.button}>
    //         <TouchableOpacity onPress={()=>handleRoute('favorite')}><Text>Favoritos</Text></TouchableOpacity> 
    //     </View>
    //     <View style={style.button}>
    //         <TouchableOpacity onPress={()=>handleRoute('chat')}><Text>Chat</Text></TouchableOpacity> 
    //     </View>
    //     <View style={style.button}>
    //         <TouchableOpacity onPress={()=>handleRoute('CartScreen')}><Text>Cart</Text></TouchableOpacity> 
    //     </View>
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="router" component={AppRouter} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const style = StyleSheet.create({
//     TabContainer:{
//         position:'absolute',
//         bottom:0,
//         flexDirection:'row',
//         justifyContent:'space-around',
//         alignItems:'center',
//         backgroundColor:'#4f6ba7',
//         padding:10,
//     },
//   button: {
//     flexDirection: "row",
//     padding: 20,
//     backgroundColor: "#47abee",
//     borderBottomColor: "#222",
//     borderWidth: 1,
//     margin: 10,
//     borderRadius: 20,
//   },
// });
