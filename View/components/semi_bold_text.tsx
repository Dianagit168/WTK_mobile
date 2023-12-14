import { View, Text } from "react-native";
import React from "react";

export default function SemiBoldText({ contentT, colorT, fontSizeT }) {
  return (
    <View>
      <Text style={{ fontWeight: "500", fontSize: fontSizeT, color: colorT }}>
        {contentT}
      </Text>
    </View>
  );
}
