import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  name: string;
  quantity: number;
}

export const CardDiary: FC<Props> = ({ name, quantity }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}
        activeOpacity={0.6}
    >
      <Text style={styles.textTitleCard}>{name ? name : "CardDiary"}</Text>
      <Text style={styles.textTitleCard}>${quantity ? quantity : 0}.00</Text>
      <Text>Ultimos 7 días</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    height: 120,
    borderRadius: 8,
    marginBottom: 3,
    marginTop: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTitleCard:{
    fontSize:25,
    fontWeight:"bold",
  }
});
