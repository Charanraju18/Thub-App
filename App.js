import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Content from "./components/Content";

export default function App() {
  return <Content />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
