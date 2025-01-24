import React from "react";
import { StyleSheet, View } from "react-native";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
export default function Footer() {
  return (
    <>
      <View style={styles.footerDiv}>
        <Foundation name="home" color="green" size={35} />
        <EvilIcons name="calendar" color="green" size={40} />
        <FontAwesome5 name="door-open" color="green" size={30} />
        <FontAwesome6 name="user" color="green" size={30} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  footerDiv: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
