import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function Home() {
  const { width, height } = Dimensions.get("screen");
  const Info = ["Praveen", "Sricharan", "Charan Raju", "Karthik"];
  const iconMap = {
    MaterialCommunityIcons: MaterialCommunityIcons,
    FontAwesome6: FontAwesome6,
    MaterialIcons: MaterialIcons,
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
  return (
    <>
      <View style={styles.home}>
        <Text style={styles.h1text}>Welcome, Charan Raju</Text>
        <View style={styles.banner1}></View>
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
        <View>
          <FlatList
            data={Info}
            renderItem={({ item }) => (
              <>
                <View style={{ width: "100%" }}>
                  <Text>{item}</Text>
                </View>
              </>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 8.8,
    padding: 15,
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
  banner2: {
    width: "100%",
    marginTop: 25,
    marginBottom: 20,
    height: 200,
    borderRadius: 15,
    backgroundColor: "green",
  },
});
