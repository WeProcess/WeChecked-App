import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "React JS",
    url: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
  },
  {
    id: 2,
    name: "JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  },
  {
    id: 3,
    name: "Node JS",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png",
  },
];

const renderItem = (item: any) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
      <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>
        {item.name}
      </Text>
    </View>
  );
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<Carousel<any>>(null);
  return (
    <View style={{ marginVertical: 10 }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        // carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#F4BB41",
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "black",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Testimonial;
