import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";

export default function ImageSvg({image, colonQty, numberLength}) {
    const images = [require("../assets/0.png"), require("../assets/1.png"), require("../assets/2.png"), require("../assets/3.png"), require("../assets/4.png"), require("../assets/5.png"), require("../assets/6.png"), require("../assets/7.png"), require("../assets/8.png"), require("../assets/9.png")];
    const currentImageName = images[image] ?? "0.png";

    const {width} = Dimensions.get("window");
    const colonWidth = 61 * colonQty;
    const availabilityWidth = width - colonWidth;
    const widthOfNumber = availabilityWidth / numberLength;

    return (
        <Image source={currentImageName} style={{...styles.image, width: widthOfNumber}}/>
    )
}


const styles = StyleSheet.create({
    image: {
        height: "100%",
        minHeight: "100%",
        resizeMode: "stretch"
    }
});
