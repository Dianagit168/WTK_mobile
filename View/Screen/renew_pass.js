import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import brandingColor from "../components/branding_color";

import Input from "../components/input";
import BtnCustom from "../components/button_custom";
import BtnNoBack from "../components/button_noback";
const wtklogo = require("./../../assets/wtklogo.png");
const wtkAngko = require("./../../assets/angkor.png");

export default function RenewPassword() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View style={{ height: 300, marginBottom: 150 }}>
          <View style={{ paddingBottom: 20, paddingLeft: 100 }}>
            <Image source={wtklogo} />
          </View>
          <Text style={{ color: brandingColor.blue60, textAlign: "center" ,paddingBottom:20}}>
            Make sure your password is secure!
          </Text>
          <Input
            object={"Password"}
            leadingIcon={"lock-outline"}
            trailingIcon={"eye-outline"}
          />
          <Input
            object={"Confirm password"}
            leadingIcon={"lock-outline"}
            trailingIcon={"eye-outline"}
          />

          <BtnCustom obj={"Confirm"} />
        </View>

        <View>
          <Image source={wtkAngko} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  boxPin: {
    height: 45,
    width: 45,
    backgroundColor: brandingColor.blue30,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
