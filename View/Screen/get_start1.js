import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
const krudwtkImg = require("./../../assets/krudwtk.png");

const Getstart1 = () => {
  return (
    <View style={styles.container}>
      <Image source={krudwtkImg} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.text1}>We're happy to see you here!</Text>
      <Text style={styles.text2}>
        Lorem ipsum dolor sit amet consectetur. Enim massa ut pellentesque
        tincidunt laoreet quis quam. Rhoncus cursus neque lectus at.
      </Text>
    </View>
  );
};
export default Getstart1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    color: "#0073FF",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  text1: {
    color: "#0073FF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  text2: {
    color: "#0073FF",
    textAlign: "center",
  },
});
