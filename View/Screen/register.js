import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Input from "../components/input";
import BtnCustom from "../components/button_custom";
import BtnNoBack from "../components/button_noback";
const wtklogo = require("./../../assets/wtklogo.png");
const wtkAngko = require("./../../assets/angkor.png");

export default function Register() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View style={{ paddingBottom: 50,paddingLeft: 100 }}>
          <Image source={wtklogo} />
        </View>
        <Input object={"Full name"} leadingIcon={"account-outline"} />
        <Input
          object={"Emai"}
          leadingIcon={"email-outline"}
          trailingIcon={""}
        />
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

        <BtnCustom obj={"Sign up"} />
        <Text style={{ textAlign: "center" }}>Or</Text>
        <BtnNoBack obj={"Register with Google"} color={"#0073FF"} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#0073FF" }}>Already have account! </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0073FF", fontWeight: "bold" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image source={wtkAngko} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
