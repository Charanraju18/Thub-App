import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function Join() {
  const { width, height } = Dimensions.get("screen");
  const Attendence = [
    { symbol: "P", text: "Present" },
    { symbol: "A", text: "Absent" },
    { symbol: "L", text: "Loading" },
  ];
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
              Attendence
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 30, color: "grey", fontWeight: "bold" }}
                >
                  L
                </Text>
                <Text style={{ fontSize: 14, color: "grey" }}>Loading</Text>
              </View>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 50,
                  backgroundColor: "lightgreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 50,
                    backgroundColor: "grey",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 50,
                      backgroundColor: "green",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>0%</Text>
                  </View>
                </View>
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
              Streak
            </Text>
            <View
              style={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 25,
                paddingRight: 30,
                // backgroundColor: "skyblue",
              }}
            >
              <View style={{ alignItems: "center", backgroundColor: "white" }}>
                <Text
                  style={{ fontSize: 30, color: "grey", fontWeight: "bold" }}
                >
                  0
                </Text>
                <Text style={{ fontSize: 14, color: "grey" }}>Max</Text>
              </View>
              <View style={{ backgroundColor: "white" }}>
                <MaterialCommunityIcons name="fire" color="green" size={60} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.session}>
          <View
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "green", fontSize: 32, fontWeight: "bold" }}>
              {date}
            </Text>
          </View>
          <View
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ color: "green", fontSize: 18 }}>No Session</Text>
          </View>
          <View
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="calendar-alt" color="green" size={25} />
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
