import { Image, StyleSheet, Text, View } from "react-native";

export default function Events() {
  return (
    <View style={styles.eventsDiv}>
      <View style={styles.div1}>
        <View
          style={{
            height: "65%",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/owl_coder.png")}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            height: "35%",
            width: "100%",
            backgroundColor: "lightgrey",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            OWL CODER 4.0
          </Text>
          <Text style={{ fontSize: 14 }}>
            Technical Hub's prestigious and the most successful training OWL
            CODER 4.0 is all set to begin its training with more updates in the
            learning from DECEMBER
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventsDiv: {
    padding: 15,
    backgroundColor: "white",
    width: "100%",
    height: 800,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  div1: {
    backgroundColor: "lightgrey",
    height: 275,
    width: "100%",
    borderRadius: 15,
  },
});
