import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Navigation } from '../../interfaces/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<any, any> {
    item: {
        id: number,
        name: string,
        type: string,
        title: string,
    },
  }

export const ItemCategory:FC<Props>=({item,navigation})=> {
    const { colors } = useTheme();
    const handleCategory=()=>{
        const category={
                name:item.title,
        }
        navigation.navigate("category",category)
    }
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    style={styles.cardCategory}
    onPress={handleCategory}
    >
    <View style={styles.cardIcon}>
        <Icon
            name={item.name}
            type={item.type}
            color="#f99979"
            size={20}
        />
    </View>
    <Text style={{ color: colors.text }}>{item.title}</Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardCategory:{
        // display: 'flex',
        // flexDirection: 'column',
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardIcon:{
        backgroundColor: '#f8e6d9',
        padding: 15,
        width: 60,
        borderRadius: 10,
    }
})