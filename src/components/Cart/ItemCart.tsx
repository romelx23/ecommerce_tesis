import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Image } from "react-native-elements";
interface Props {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
  };
}

export const ItemCart: FC<Props> = ({ item }) => {
  return (
    <View style={styles.cardCart}>
      <Image
        source={{
          uri: item.img,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
        }}
      />
      <View style={styles.cartContent}>
        <Text style={styles.cartTitle}>{item.name}</Text>
        <View style={styles.contentPrice}>
        <Text style={styles.cartPrice}>$.{item.price} </Text>
        <Text style={styles.cartQuantity}> x{item.quantity} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardCart: {
    display: "flex",
    flexDirection: "row",
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f8e6d9",
  },
  cartContent:{
      marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
  },
  cartTitle:{
      fontSize: 18,
    fontWeight: 'bold',
  },
  cartPrice:{
        fontSize: 18,
    fontWeight: 'bold',
    color: '#f99979',
  },
  cartQuantity:{
    fontSize: 18,
  fontWeight: 'bold',
  color: '#999999',
},
contentPrice:{
    display: 'flex',
    flexDirection: 'row',
}
});
