import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function Profile() {
  const { width, height } = Dimensions.get("screen");
  const date = new Date().getDate();
  return (
    <View style={[styles.container, { height: height }]}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              Courses
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, color: "green", fontWeight: "bold" }}
                >
                  07
                </Text>
                <Text style={{ fontSize: 11, color: "green" }}>Enabled</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <MaterialIcons name="laptop-mac" size={42} color="green" />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              Coding Profiles
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, color: "green", fontWeight: "bold" }}
                >
                  00
                </Text>
                <Text style={{ fontSize: 11, color: "green" }}>Solved</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <FontAwesome6 name="laptop-code" size={42} color="green" />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              Skills Passport
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, color: "green", fontWeight: "bold" }}
                >
                  00
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <FontAwesome6 name="passport" size={42} color="green" />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              J Path
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, color: "green", fontWeight: "bold" }}
                >
                  0
                </Text>
                <Text style={{ fontSize: 11, color: "green" }}>Eligible</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="run-fast"
                  size={42}
                  color="green"
                />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              Status
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 20, color: "green", fontWeight: "bold" }}
                >
                  Active
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={42}
                  color="green"
                />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                color: "green",
                height: 40,
                paddingTop: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
            >
              V Cards
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 24, color: "green", fontWeight: "bold" }}
                >
                  0
                </Text>
                <Text style={{ fontSize: 11, color: "green" }}>Total</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: 50,
                  height: 50,
                }}
              >
                <Image
                  source={require("../assets/yellow-card.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  top: {
    flex: 1.2,
    backgroundColor: "#138F39",
  },
  bottom: {
    flex: 4,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    padding: 15,
    gap: 15,
  },
  card: {
    width: 190,
    height: 140,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
  },
  session: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    display: "flex",
    flexDirection: "row",
  },
});
