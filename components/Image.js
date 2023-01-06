import React from "react";
import {Dimensions} from "react-native";
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
    const images = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
    const currentImageName = images[image];
    const props = {height: Dimensions.get('window').height - 10, width: 250, style: {backgroundColor: 'white'}};

    return (
        React.createElement(currentImageName, props)
    )
}