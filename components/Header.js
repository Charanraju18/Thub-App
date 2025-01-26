import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerDiv}>
      <Image source={require("../assets/GREEN TM.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerDiv: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
  },
});
