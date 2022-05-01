import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { PropsNavigationHome } from '../../interfaces/home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getVerificarUsuario } from '../../helpers/fetch'
import { Layout } from '../../components/Layout'
import { AuthContext } from '../../context/AuthContext'
import { FlatList } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import ListCategories from '../../components/Categories/ListCategories'

const HomeScreen = ({ navigation }: PropsNavigationHome) => {

    const { auth,setAuth,setRol } = useContext(AuthContext);

    useEffect(() => {
        usuarioLogeado();
    }, [])

    const usuarioLogeado = async ()  =>{
        if(!auth.logged){
            navigation.replace("login");
        }
    }

  
// conejita playboy
    const verificarUsuario = async () => {

        const respVerificarToquen = await getVerificarUsuario();

        console.log("verificar usuario",respVerificarToquen);
        
        // if(respVerificarToquen.token){
        //     console.log("respuesta del verificar ",respVerificarToquen.token)

        //     await AsyncStorage.setItem("token", respVerificarToquen.token)
        // }else{
        //     await AsyncStorage.clear();
        //     navigation.replace!("login");
        // }

    }

    return (
        <View
        style={style.contenedor}
        >
            <View style={style.containerCategory}>
                <ListCategories navigation={navigation}/>
            </View>
            <Search></Search>
            <ListItem navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        // backgroundColor:'#4f6ba7',
        padding: 10,
        flex: 1,
    },
    containerCategory: {
        flexDirection: "row",
        // justifyContent: "space-between",
        
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 20,
    },
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

export default HomeScreen
