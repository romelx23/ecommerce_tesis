import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const ListStars = () => {
  return (
    <View style={styles.startContainer}>
      <Icon
        // style={style.iconPlus}
        type="material"
        name="star"
        color="#f1ea3c"
        size={15}
      ></Icon>
      <Icon
        // style={style.iconPlus}
        type="material"
        name="star"
        color="#f1ea3c"
        size={15}
      ></Icon>
      <Icon
        // style={style.iconPlus}
        type="material"
        name="star"
        color="#f1ea3c"
        size={15}
      ></Icon>
      <Icon
        // style={style.iconPlus}
        type="material"
        name="star"
        color="#f1ea3c"
        size={15}
      ></Icon>
      <Icon
        // style={style.iconPlus}
        type="material"
        name="star"
        color="#f1ea3c"
        size={15}
      ></Icon>
    </View>
  );
};

export default ListStars;

const styles = StyleSheet.create({
    startContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
