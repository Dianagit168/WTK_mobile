import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
const krudwtkImg = require("./../../assets/krudwtk.png");

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
     
      <Image source={krudwtkImg} />

      <StatusBar style="auto" />
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  startScreenText: {
    color: "red",
    fontWeight: "bold",
  },
});
