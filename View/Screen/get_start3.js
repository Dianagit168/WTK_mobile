import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const messagewtklogo = require("./../../assets/messagewtk.png");

export default function Getstart3() {
  return (
    <View style={styles.container}>
      <Image source={messagewtklogo} style={styles.img} />
      <Text style={styles.welcomeText}>Choose?</Text>
      <Text style={styles.text1}>Your language!</Text>
      <Text style={styles.text2}>What language would you like to see?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>Khmer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>English</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingHorizontal: 150,
    borderColor: "#0073FF",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1.5,
    height: 50,
  },
  textBtn: {
    textAlign: "center",
    fontSize: 17,
    color: "#0073FF",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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
//
