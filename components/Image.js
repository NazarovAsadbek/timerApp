import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";
import Zero from '../assets/0.svg';
import One from '../assets/1.svg';
import Two from '../assets/2.svg';
import Three from '../assets/3.svg';
import Four from '../assets/4.svg';
import Five from '../assets/5.svg';
import Six from '../assets/6.svg';
import Seven from '../assets/7.svg';
import Eight from '../assets/8.svg';
import Nine from '../assets/9.svg';

export default function ImageSvg({image}) {
    const images = [require("../assets/0.png"), require("../assets/1.png"), require("../assets/2.png"), require("../assets/3.png"), require("../assets/4.png"), require("../assets/5.png"), require("../assets/6.png"), require("../assets/7.png"), require("../assets/8.png"), require("../assets/9.png")];
    const {width, height} = Dimensions.get('window');
    const currentImageName = images[image] ?? "0.png";

    return (
        // React.createElement(currentImageName, props)
        <Image source={currentImageName} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        minHeight: "100%",
        width: 180,
        resizeMode: "stretch"
    }
});
