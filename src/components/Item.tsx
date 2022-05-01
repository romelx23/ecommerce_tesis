import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Producto } from "../interfaces/producto";
import { useTheme } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import ListStars from "./ListStars";

interface Props extends NativeStackScreenProps<any, any> {
  item: Producto;
}
const Item = ({ item, navigation }: Props) => {
  const { colors, cardColor } = useTheme();

  const handleOpenScren = () => {
    navigation.navigate("detalleProducto", { item });
  };

  return (
    <View
      style={{
        backgroundColor: cardColor,
        ...style.contenedorItem,
      }}
    >
      {/* <Text style={{ color: colors.text, ...style.nombre }}>{item.nombre}</Text> */}

      <View style={style.contenedorImagenBoton}>
        <TouchableOpacity style={style.botonFavorite} onPress={handleOpenScren}>
          <Icon
            style={style.iconPlus}
            type="material"
            name="favorite"
            color="#ef1d1d"
            size={20}
          ></Icon>
        </TouchableOpacity>
        <SharedElement id={`item.${item._id}.image`}>
          <Image
            source={{
              uri: item.img
                ? item.img
                : "https://swimg.com/wp-content/uploads/not-available.jpg",
            }}
            style={style.contenedorImage}
          ></Image>
        </SharedElement>
        <View style={style.textCard}>
          <SharedElement id={`item.${item._id}.title`}>
            <Text
              numberOfLines={1}
              style={{ color: colors.text, ...style.nombre }}
            >
              {item.nombre}
            </Text>
          </SharedElement>
          <Text style={{ color: colors.text, ...style.nombre }}>
            $ {item.precio}
          </Text>
          <ListStars />
        </View>
        <TouchableOpacity style={style.botonInfo} onPress={handleOpenScren}>
          <Icon
            style={style.iconPlus}
            type="material-community"
            name="plus"
            color="#f99978"
            size={18}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contenedorItem: {
    flex: 1,
    // backgroundColor: "#A7C5DD",
    position: "relative",
    borderRadius: 20,
    margin: 10,
    marginEnd: 7,
    marginStart: 7,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contenedorImagenBoton: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorImage: {
    width: 80,
    height: 100,
    borderRadius: 9,
    resizeMode: "cover",
    marginTop: 35,
    marginBottom: 55,
  },
  botonInfo: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 5,
    right: -15,
    borderRadius: 40,
    backgroundColor: "#f8e6d9",
    marginLeft: 11,
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botonFavorite: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 2,
    right: -17,
  },
  nombre: {
    // color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
    paddingEnd: 5,
    paddingStart: 5,
    marginBottom: 6,
  },
  precio: {},
  iconPlus: {
    fontWeight: "900",
    fontSize: 16,
  },
  textCard: {
    position: "absolute",
    bottom: 0,
    left: -18,
    width: "75%",
  },
});

export default Item;
