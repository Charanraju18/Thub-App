import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Home() {
  const { width } = Dimensions.get("screen");

  const Info = [
    { id: 1, image: require("../assets/1.png") },
    { id: 2, image: require("../assets/2.png") },
    { id: 3, image: require("../assets/3.png") },
    { id: 4, image: require("../assets/4.png") },
    { id: 5, image: require("../assets/5.png") },
    { id: 6, image: require("../assets/6.png") },
    { id: 7, image: require("../assets/7.png") },
    { id: 8, image: require("../assets/8.png") },
    { id: 9, image: require("../assets/9.png") },
    { id: 11, image: require("../assets/11.png") },
  ];

  const iconMap = {
    MaterialCommunityIcons: MaterialCommunityIcons,
    FontAwesome6: FontAwesome6,
    MaterialIcons: MaterialIcons,
    FontAwesome5: FontAwesome5,
    Ionicons: Ionicons,
    FontAwesome: FontAwesome,
    Fontisto: Fontisto,
  };

  const Categories = [
    {
      name: "Programs",
      icon: "microsoft-visual-studio-code",
      tag: "MaterialCommunityIcons",
    },
    {
      name: "Courses",
      icon: "graduation-cap",
      tag: "FontAwesome6",
    },
    {
      name: "Certifications",
      icon: "certificate",
      tag: "MaterialCommunityIcons",
    },
    {
      name: "OwlCoder",
      icon: "owl",
      tag: "MaterialCommunityIcons",
    },
    {
      name: "Placements",
      icon: "chess-pawn",
      tag: "FontAwesome6",
    },
    {
      name: "Team",
      icon: "people-group",
      tag: "FontAwesome6",
    },
    {
      name: "Partners",
      icon: "handshake",
      tag: "FontAwesome6",
    },
    {
      name: "Registration",
      icon: "app-registration",
      tag: "MaterialIcons",
    },
  ];

  const Courses = [
    { name: "ServiceNow", icon: "user-circle", tag: "FontAwesome5" },
    { name: "VLSI", icon: "hardware-chip", tag: "Ionicons" },
    { name: "Embedded System", icon: "microchip", tag: "FontAwesome" },
    { name: "APEX", icon: "oracle", tag: "Fontisto" },
  ];

  return (
    <>
      <View style={styles.home}>
        <Text style={styles.h1text}>Welcome, Charan Raju</Text>
        <View style={styles.banner1}>
          <Image
            source={require("../assets/google.png")}
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
          />
        </View>
        <Text style={styles.h1text}>Categories</Text>
        <View style={styles.categoriesDiv}>
          {Categories.map((category, index) => {
            const IconComponent = iconMap[category.tag];
            return (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <View style={styles.iconBorder}>
                  <IconComponent name={category.icon} color="black" size={30} />
                </View>
                <Text style={styles.p1}>{category.name}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.h1text}>Digi Wall</Text>
        <View style={styles.carouselContainer}>
          <FlatList
            data={Info}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  width: width,
                  height: 200,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "green",
                    borderRadius: 15,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: "100%", borderRadius: 15 }}
                  />
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <Text style={styles.h1text}>Latest Courses</Text>
        <View style={styles.categoriesDiv}>
          {Courses.map((course, index) => {
            const IconComponent = iconMap[course.tag];
            return (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <View style={styles.iconBorder}>
                  <IconComponent name={course.icon} color="black" size={30} />
                </View>
                <Text style={styles.p1}>{course.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 8.8,
    padding: 15,
    height: "auto",
  },
  h1text: {
    fontSize: 21,
    fontWeight: "bold",
    color: "green",
  },
  banner1: {
    width: "100%",
    marginTop: 25,
    marginBottom: 20,
    height: 175,
    borderRadius: 15,
    backgroundColor: "green",
  },
  categoriesDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    marginTop: 5,
  },
  iconBorder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "gold",
    marginBottom: 10,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  p1: {
    fontSize: 14,
  },
  carouselContainer: {
    marginHorizontal: -15,
    marginBottom: 20,
  },
});
