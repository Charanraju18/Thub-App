import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <>
      <View style={styles.headerDiv}>
        <Image
          source={require("../assets/GREEN TM.png")}
          style={{ width: "50%", height: "50%" }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerDiv: {
    flex: 0.6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
