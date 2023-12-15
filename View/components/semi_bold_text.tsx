import { View, Text } from "react-native";
import React from "react";
interface sbtProp {
  contentT: string;
  colorT: string;
  fontSizeT: number;
  
}


export default function SemiBoldText({ contentT, colorT, fontSizeT }:sbtProp) {
  return (
    <View>
      <Text style={{ fontWeight: "500", fontSize: fontSizeT, color: colorT }}>
        {contentT}
      </Text>
    </View>
  );
}
