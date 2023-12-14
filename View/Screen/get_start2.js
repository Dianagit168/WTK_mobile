import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
const apolowtkImg = require("./../../assets/apolowtk.png");

export default function Getstart2() {
  return (
    <View style={styles.container}>
      <Image source={apolowtkImg} style={styles.img} />
      <Text style={styles.welcomeText}>who we are?</Text>
      <Text style={styles.text1}>Build the tools for our next generation!</Text>
      <Text style={styles.text2}>
        Lorem ipsum dolor sit amet consectetur. Enim massa ut pellentesque
        tincidunt laoreet quis quam. Rhoncus cursus neque lectus at.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    justifyContent: "center",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    marginTop: 10,

    color: "#0073FF",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  text1: {
    marginTop: 10,
    marginBottom: 5,

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
