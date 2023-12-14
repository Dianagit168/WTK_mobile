import { View, Text } from "react-native";
import React from "react";
import brandingColor from "./branding_color";

export default function ChannelOrg() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        width: 170,
      }}
    >
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: brandingColor.blueBlack100,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: brandingColor.white,
            fontSize: 10,
          }}
        >
          {" "}
          KOOMPI
        </Text>
      </View>
      <View style={{ marginLeft: 7, width: 150 }}>
        <Text style={{ fontWeight: "bold" }}> KOOMPI Official</Text>
        <Text> 3k subscribe</Text>
      </View>
    </View>
  );
}
