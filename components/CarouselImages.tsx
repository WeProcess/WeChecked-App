import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
} from "react-native";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("screen");
const IMG_WIDTH = width * 0.88;
const IMG_HEIGHT = IMG_WIDTH * 0.6;

const img = [
  "https://karmamgmt.com/wecheckbetav0.1/app_new_php/img/advexpert.jpg",
  "https://karmamgmt.com/wecheckbetav0.1/app_new_php/img/minwage.jpg",
  "https://karmamgmt.com/wecheckbetav0.1/app_new_php/img/wecheck-audit.jpg",
];

const resources = img.map((image, index) => ({
  key: "image" + String(index),
  photo: image,
}));

const CarouselImages = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text style={styles.Text}>Animated Parallax Effect</Text> */}
        <Animated.FlatList
          data={resources}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width * 0.7, 0, width * 0.7],
            });
            return (
              <View
                style={{
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    shadowColor: "#000",
                    shadowOpacity: 0.6,
                    shadowRadius: 20,
                    shadowOffset: { width: 0, height: 0 },
                  }}
                >
                  <View
                    style={{
                      width: IMG_WIDTH,
                      borderRadius: 10,
                      height: IMG_HEIGHT,
                      overflow: "hidden",
                      alignItems: "center",
                    }}
                  >
                    <Animated.Image
                      source={{ uri: item.photo }}
                      style={{
                        width: IMG_WIDTH,
                        height: IMG_HEIGHT,
                        resizeMode: "cover",
                        transform: [{ translateX }],
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#000",
    fontSize: 20,
    paddingTop: 20,
    fontWeight: "900",
    textAlign: "center",
  },
});

export default CarouselImages;
