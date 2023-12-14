import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const wtklogo = require("./../../assets/wtklogo.png");
const wtkAngko = require("./../../assets/angkor.png");

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1,paddingHorizontal:10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View style={{ alignItems: "center" }}>
          <View>
            <Image source={wtklogo} />
          </View>

          <View style={{ paddingBottom: 20, paddingTop: 20, width: "100%" }}>
            <View style={style.contentTextInput}>
              <Text style={style.txtLoginGg}> Email</Text>
              <Text style={{ marginLeft: 5, color: "red" }}>*</Text>
            </View>
            <View style={style.TextInputDecorate}>
              <Icon
                name="email-outline"
                style={{
                  fontSize: 25,
                  color: "#0073FF",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              />

              <TextInput style={{ width: "80%" }} />
            </View>
          </View>

          <View style={{ paddingBottom: 7, width: "100%" }}>
            <View style={style.contentTextInput}>
              <Text style={style.txtLoginGg}> Password</Text>
              <Text style={{ marginLeft: 5, color: "red" }}>*</Text>
            </View>
            <View style={style.TextInputDecorate}>
              <Icon
                name="lock-outline"
                style={{
                  fontSize: 25,
                  color: "#0073FF",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              />
              <TextInput style={{ width: "80%" }} />
              <Icon
                name="eye"
                style={{ fontSize: 25, color: "#0073FF", marginTop: 10 }}
              />
            </View>
          </View>

          <View style={{ alignItems: "flex-end", width: "100%" }}>
            <TouchableOpacity>
              <Text style={style.txtLoginGg}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.txtLogin}>Login</Text>
          </TouchableOpacity>

          <Text style={style.txtLoginGg} {...{ marginTop: 10 }}>
            Or
          </Text>

          <TouchableOpacity style={style.loginGgBtn}>
            <Text style={style.txtLoginGg}>Login with Google</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <Text style={style.txtLoginGg}>Already have account! </Text>
            <TouchableOpacity>
              <Text style={style.txtLoginGg}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image source={wtkAngko} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  TextInputDecorate: {
    marginTop: 10,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    borderColor: "#0073FF",
    borderRadius: 16,
  },
  loginBtn: {
    justifyContent: "center",
    backgroundColor: "#0073FF",

    borderRadius: 50,
    marginTop: 20,
    padding: 5,
    width: "100%",
    height: 50,
  },
  txtLogin: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  loginGgBtn: {
    justifyContent: "center",
    borderColor: "#0073FF",

    borderWidth: 1.5,

    borderRadius: 50,
    marginTop: 20,
    padding: 5,
    width: "100%",
    height: 50,
  },
  txtLoginGg: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0073FF",
  },
  contentTextInput: {
    flexDirection: "row",
  },
});

