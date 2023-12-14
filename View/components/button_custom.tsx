import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function BtnCustom({ obj, color, bor_radi }) {
  return (
    <View style={{ paddingBottom: 20, paddingTop: 10 }}>
      <TouchableOpacity style={style.btnContainer}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
         
          {obj}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  btnContainer: {
    height: 50,
    backgroundColor: "#0073FF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
