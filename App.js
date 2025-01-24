import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Content />
          <Footer />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
