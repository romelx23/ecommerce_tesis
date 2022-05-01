import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListCart from "../../components/Cart/ListCart";
import { Button } from "react-native-paper";

export default function CartScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleCart}>Tiendita Don Pepe</Text>
        <ListCart />
      </View>
      <View style={styles.contentCheckout}>
        <View>
          <Text style={styles.textCheckout}>Subtotal</Text>
          <Text style={styles.textCheckout}>$0.00</Text>
        </View>
        <View>
          <Text style={styles.textCheckout}>Confirmar Compra</Text>
          <Button
            style={styles.buttonCheckout}
            mode="contained"
            onPress={() => {
              console.log("Pressed");
            }}
          >
            <Text style={styles.textButton}>Calcular</Text>
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleCart: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentCheckout: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textCheckout: {
    fontSize: 18,
  },
  buttonCheckout: {
    width: "100%",
    // height: 50,
    backgroundColor: "#f67547",
    borderRadius: 10,
    paddingVertical: 7,
  },
  textButton:{
    fontSize: 15,
    fontWeight: 'normal',
  }
});
