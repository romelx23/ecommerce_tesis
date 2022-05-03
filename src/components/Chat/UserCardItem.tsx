import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Icon, Image } from "react-native-elements";
interface Props{
  item: {
      id: number,
      name: string,
      avatar: string,
  }
}

export const UserCardItem:FC<Props> = ({item}) => {
  return (
    <View
      style={styles.container}
      >
      <Image
            style={styles.circleContainer}
            source={{
                uri:   item.avatar?item.avatar:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5f/5fb4f0ef311f82d865d95dbf14e635e4c749d91c.jpg"
            }}
        />
      <Text>UserItem</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Agregar </Text>
        <Icon name="person-add" size={20} type="material" color={"#6021ff"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 150,
    alignItems: "center",
    // margin: 10,
    paddingVertical: 10,
    // backgroundColor: "#4336ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10,

  },
  circleContainer:{
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#4336ff",
},
button:{
    display: "flex",
    flexDirection: "row",
    width: 130,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#4336ff",
    borderStyle: "solid",
    color: "#4336ff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    padding: 10,
    margin: 10,

}
});
