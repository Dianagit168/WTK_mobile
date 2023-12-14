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

export default function VerifyCode() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View style={{ height: 300, marginBottom: 150 }}>
          <View style={{ paddingBottom: 20, paddingLeft: 100 }}>
            <Image source={wtklogo} />
          </View>
          <Text style={{ color: brandingColor.blue60, textAlign: "center" }}>
            Enter that was sent to
          </Text>

          <Text
            style={{
              color: brandingColor.blue60,
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: 20,
            }}
          >
            example**@gmail.com
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: 60,
              marginRight: 60,
            }}
          >
            <View style={style.boxPin}>
              <TextInput style={{ fontSize: 30 }} />
            </View>
            <View style={style.boxPin}>
              <TextInput style={{ fontSize: 30 }} />
            </View>
            <View style={style.boxPin}>
              <TextInput style={{ fontSize: 30 }} />
            </View>
            <View style={style.boxPin}>
              <TextInput style={{ fontSize: 30 }} />
            </View>
          </View>
          <Text
            style={{
              color: brandingColor.blue60,
              textAlign: "center",

              paddingTop: 30,
            }}
          >
            Not received code yet.
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: brandingColor.blue60,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 5,
                paddingBottom: 30,
              }}
            >
              Resent
            </Text>
          </TouchableOpacity>
          <BtnCustom obj={"Verify"} />
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
