import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
export default function Footer() {
  return (
    <>
      <View style={styles.footerDiv}>
        <View style={styles.iconsDiv}>
          <Foundation name="home" color="green" size={30} />
          <Text style={{ fontSize: 12 }}>Home</Text>
        </View>
        <View style={styles.iconsDiv}>
          <EvilIcons name="calendar" color="green" size={35} />
          <Text style={{ fontSize: 12 }}>Events</Text>
        </View>
        <View style={styles.iconsDiv}>
          <FontAwesome5 name="door-open" color="green" size={25} />
          <Text style={{ fontSize: 12 }}>Join</Text>
        </View>
        <View style={styles.iconsDiv}>
          <FontAwesome6 name="user" color="green" size={25} />
          <Text style={{ fontSize: 12 }}>Profile</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  footerDiv: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "lightgrey",
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
