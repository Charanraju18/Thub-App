import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Updated import
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

export default function Content() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Home />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  footer: {
    height: 60,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
});
