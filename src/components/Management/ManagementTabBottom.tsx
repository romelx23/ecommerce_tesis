import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { ManagementScreen } from '../../screens/MangementScreen/Management/ManagementScreen';
import { DiaryScreen } from '../../screens/MangementScreen/Diary/DiaryScreen';
import { InventaryScreen } from '../../screens/MangementScreen/Inventary/InventaryScreen';

export default function ManagementTabBottom() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();

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
            <Icon name="insert-chart-outlined" size={25} color={focused ? color : "#ffffff"}/>
          ),
          tabBarLabel: () => <Text style={{...style.tabBarLabel}}>Admin</Text>,
        }}
        name="Management"
        component={ManagementScreen}
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
            <Icon name="data-usage" size={25} color={focused ? color : "#ffffff"} />
          ),
          tabBarLabel: () => <Text style={{...style.tabBarLabel}}>Diario</Text>,
        }}
        name="Diary"
        component={DiaryScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#4f19ff",
          // tabBarInactiveBackgroundColor: "#6e3fda",
          tabBarItemStyle: {
            display: "flex",
          },
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarIcon: ({ focused, color }) => (
            <Icon name="assignment" size={25} color={focused ? color : "#ffffff"} />
          ),
          tabBarLabel: () => <Text style={{...style.tabBarLabel}}>Inventario</Text>,
        }}
        name="Inventary"
        component={InventaryScreen}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  tabBarLabel: {
    color: '#ffffff',
    fontSize: 12,
},
});
