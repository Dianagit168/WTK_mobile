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

export default function ForgotPass() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View style={{ height: 300, marginBottom: 150 }}>
          <View style={{ paddingBottom: 50, paddingLeft: 100 }}>
            <Image source={wtklogo} />
          </View>

          <Input
            object={"Emai"}
            leadingIcon={"email-outline"}
            trailingIcon={""}
            placeHolder={''}
          />

          <BtnCustom obj={"Get code"} color={undefined} bor_radi={undefined} />
        </View>

        <View>
          <Image source={wtkAngko} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
