import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  Animated,
} from "react-native";
import React from "react";
import { CircleChart } from "../../../components/Charts/CircleChart";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

export const ManagementScreen = () => {
  return (
    <View>
      {/* <Text>ManagementScreen</Text> */}
      <CircleChart />
      <View style={styles.contentSections}>
        <Text style={styles.titleSection}>ManagementScreen</Text>
        <TouchableOpacity 
        style={styles.buttonSection} 
        activeOpacity={0.6}
        >
          <View style={styles.contentLeft}>
            <View style={styles.contentIcon}>
              <Icon name="event-note" type="material" color="#fff" size={30} />
            </View>
            <Text style={styles.textItemTitle}>Amazon</Text>
          </View>
          <Text>$150</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonSection} 
        activeOpacity={0.6}
        >
          <View style={styles.contentLeft}>
            <View style={styles.contentIcon}>
              <Icon name="storefront" type="material" color="#fff" size={30} />
            </View>
            <Text style={styles.textItemTitle}>Amazon</Text>
          </View>
          <Text>$150</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonSection} 
        activeOpacity={0.6}
        >
          <View style={styles.contentLeft}>
            <View style={styles.contentIcon}>
              <Icon name="room-service" type="material" color="#fff" size={30} />
            </View>
            <Text style={styles.textItemTitle}>Amazon</Text>
          </View>
          <Text>$150</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonSection} 
        activeOpacity={0.6}
        >
          <View style={styles.contentLeft}>
            <View style={styles.contentIcon}>
              <Icon name="airport-shuttle" type="material" color="#fff" size={30} />
            </View>
            <Text style={styles.textItemTitle}>Amazon</Text>
          </View>
          <Text>$150</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleSection: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    right: -20,
  },
  contentSections: {
    // flex:1,
    height: "61%",
    // justifyContent:"center",
    // alignItems:"center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:"#435fff",
    // marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  contentLeft:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  contentIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#435fff",
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 5,
    marginRight: 10,
  },
  textItemTitle:{
    fontSize:13,
    fontWeight:"bold",
  }
});
