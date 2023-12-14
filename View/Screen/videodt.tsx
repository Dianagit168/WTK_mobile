import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

export default function MyComponent() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2} />
      <Image
        resizeMode="cover"
        fitContent={true}
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d590e101902dbec81cd2d7222cbe9c77cd114b94c02814be2e3e4f4587fe20f9?",
        }}
        style={styles.image1}
      >
        <Text>...more</Text>
      </Image>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Text>
            What is Weteka? Is it help our new <br />
            generations?
          </Text>
        </View>
        <View style={styles.view5}>
          <Text>1.2K views - 2 months ago </Text>
        </View>
        <View style={styles.view6}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f72e8998f91edcd6a331a59730a41e721306ef5d21263933cf52d5ec0c3f133?",
            }}
            style={styles.image2}
          />
          <View style={styles.view7}>
            <View style={styles.view8}>
              <Text>Weteka Official</Text>
            </View>
            <View style={styles.view9}>
              <Text>1.2K followers</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/736f4be8fb5e80673198740fb4a007b40a9806a724fef438e9b3fc53c9276f04?",
            }}
            style={styles.image3}
          />
          <View style={styles.view10}>
            <Text>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.view11}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2258f004-7fb8-4709-a630-cda130a357e7?",
          }}
          style={styles.image4}
        />
        <View style={styles.view12}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fccd1a868a45f33a6aef85f1c10144b1a246b7ffe944d00fbe66b3f5acde6cf8?",
            }}
            style={styles.image5}
          />
          <View style={styles.view13}>
            <Text>Comment</Text>
          </View>
        </View>
        <View style={styles.view14}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5df87879639c986967db9d68f9675532015d8de0fb8d832906c668cc2f0a66?",
            }}
            style={styles.image6}
          />
          <View style={styles.view15}>
            <Text>Share</Text>
          </View>
        </View>
        <View style={styles.view16}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8526f12887f9e215c3d81966b7278975c477de0c9518a259bdbeb6872145531?",
            }}
            style={styles.image7}
          />
          <View style={styles.view17}>
            <Text>Stare</Text>
          </View>
        </View>
      </View>
      <View style={styles.view18}>
        <View style={styles.view19}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd047324e3d94a5c196a9915a9f37d7e57584d0e7060498397767dc572d9762c?",
            }}
            style={styles.image8}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebc219b15e972365048075ca20ea8a5dd7d10693daff2a1d1ae2bd6d7f5689d6?",
            }}
            style={styles.image9}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebc219b15e972365048075ca20ea8a5dd7d10693daff2a1d1ae2bd6d7f5689d6?",
            }}
            style={styles.image10}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebc219b15e972365048075ca20ea8a5dd7d10693daff2a1d1ae2bd6d7f5689d6?",
            }}
            style={styles.image11}
          />
        </View>
        <View style={styles.view20}>
          <View style={styles.view21}>
            <Text>The first step of using Weteka!</Text>
          </View>
          <View style={styles.view22}>
            <View style={styles.view23}>
              <Text>Chapter 1</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/736f4be8fb5e80673198740fb4a007b40a9806a724fef438e9b3fc53c9276f04?",
              }}
              style={styles.image12}
            />
            <View style={styles.view24}>
              <Text>Lesson 1</Text>
            </View>
          </View>
          <View style={styles.view25}>
            <Text>The first step of using Weteka!</Text>
          </View>
          <View style={styles.view26}>
            <View style={styles.view27}>
              <Text>Chapter 1</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/736f4be8fb5e80673198740fb4a007b40a9806a724fef438e9b3fc53c9276f04?",
              }}
              style={styles.image13}
            />
            <View style={styles.view28}>
              <Text>Lesson 2</Text>
            </View>
          </View>
          <View style={styles.view29}>
            <Text>The first step of using Weteka!</Text>
          </View>
          <View style={styles.view30}>
            <View style={styles.view31}>
              <Text>Chapter 1</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/736f4be8fb5e80673198740fb4a007b40a9806a724fef438e9b3fc53c9276f04?",
              }}
              style={styles.image14}
            />
            <View style={styles.view32}>
              <Text>Lesson 2</Text>
            </View>
          </View>
          <View style={styles.view33}>
            <Text>The first step of using Weteka!</Text>
          </View>
          <View style={styles.view34}>
            <View style={styles.view35}>
              <Text>Chapter 1</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/736f4be8fb5e80673198740fb4a007b40a9806a724fef438e9b3fc53c9276f04?",
              }}
              style={styles.image15}
            />
            <View style={styles.view36}>
              <Text>Lesson 2</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fbca9281e16895e4c3b4b69bd168d6c3c98a4b6669e14e216f82dc1bba98a5e?",
        }}
        style={styles.image16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view1: { backgroundColor: "#FFF", display: "flex", flexDirection: "column" },
  view2: {
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    display: "flex",
    minHeight: 48,
    width: "100%",
    flexDirection: "column",
  },
  image1: {
    color: "#021C3C",
    position: "relative",
    whiteSpace: "nowrap",
    overflow: "hidden",
    alignSelf: "stretch",
    minHeight: 221,
    width: "100%",
    alignItems: "center",
   
    aspectRatio: "1.95",
  },
  view3: {
    alignSelf: "center",
    display: "flex",
    marginTop: 22,
    width: "100%",
    maxWidth: 297,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view4: {
    color: "#021C3C",
   
  },
  view5: {
    color: "rgba(2, 28, 60, 0.30)",
    marginTop: 12,
   
  },
  view6: {
    display: "flex",
    marginTop: 8,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image2: {
    overflow: "hidden",
   
    position: "relative",
    display: "flex",
    width: 47,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "0.96",
  },
  view7: {
    alignSelf: "center",
    display: "flex",
  
    flexBasis: "0%",
    paddingRight: 52,
    flexDirection: "column",
    alignItems: "stretch",
   
  },
  view8: {
    color: "#021C3C",
   
   
  },
  view9: {
    color: "rgba(2, 28, 60, 0.30)",
    marginTop: 10,
   
  },
  image3: {
    overflow: "hidden",
   
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view10: {
    color: "rgba(0, 115, 255, 0.60)",
    
    marginTop: 7,
   
  },
  view11: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: 13,
    paddingRight: 22,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 11,
  },
  image4: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 77,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "2.33",
  },
  view12: {
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 6,
   
  },
  image5: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view13: {
    color: "#021C3C",
    alignSelf: "center",
   
  },
  view14: {
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 6,
   
  },
  image6: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view15: {
    color: "#021C3C",
    alignSelf: "center",
   
    
  },
  view16: {
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 6,
    
  },
  image7: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view17: {
    color: "#021C3C",
    alignSelf: "center",
   
  },
  view18: {
    alignSelf: "center",
    display: "flex",
   
    gap: 10,
   
  },
  view19: {
    display: "flex",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "center",
  },
  image8: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 39,
    flexDirection: "column",
    aspectRatio: "1",
  },
  image9: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    marginTop: 29,
    width: 39,
    flexDirection: "column",
    aspectRatio: "1",
  },
  image10: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    marginTop: 29,
    width: 39,
    flexDirection: "column",
    aspectRatio: "1",
  },
  image11: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    marginTop: 29,
    width: 39,
    flexDirection: "column",
    aspectRatio: "1",
  },
  view20: {
    display: "flex",
    marginTop: 7,
  
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view21: {
    color: "#021C3C",
   
  },
  view22: {
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  view23: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
    
  },
  image12: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view24: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
   
    
  },
  view25: {
    color: "#021C3C",
    marginTop: 19,
   
  },
  view26: {
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  view27: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
    
  },
  image13: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view28: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
    
  },
  view29: {
    color: "#021C3C",
    marginTop: 19,
    
  },
  view30: {
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  view31: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
   
  },
  image14: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view32: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
    
  },
  view33: {
    color: "#021C3C",
    marginTop: 19,
    
    
  },
  view34: {
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  view35: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
    
   
   
  },
  image15: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view36: {
    color: "rgba(2, 28, 60, 0.60)",
    alignSelf: "center",
   
    margin: 9,
   
  },
  image16: {
    overflow: "hidden",
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: 115,
    width: "100%",
    flexDirection: "column",
    aspectRatio: "5.31",
  },
});


