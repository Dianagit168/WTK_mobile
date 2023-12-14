import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import brandingColor from "./branding_color";

export default function Input({ object, leadingIcon, trailingIcon ,placeHolder}:any) {
  const [hidePass, setHidePass] = useState(false);
  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: brandingColor.blue30, paddingBottom: 10 }}>
          {object}
        </Text>
        <Text style={{ color: "red", paddingBottom: 10, marginLeft: 7 }}>
          *
        </Text>
      </View>
      <View style={style.inputContainer}>
        <Icon name={leadingIcon} style={style.iconCust} />
        <TextInput style={{ width: "75%" }}  placeholder={placeHolder}/>
        <Icon
          onPress={() => setHidePass(!hidePass)}
          name={hidePass ? trailingIcon : "eye-off-outline"}
          style={style.iconCust}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 50,

    borderColor: brandingColor.blue60,
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: "center",
  },
  iconCust: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: brandingColor.blue60,
  },
});
