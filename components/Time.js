import React from "react";
import {FlatList, Text, View} from "react-native";
import ImageSvg from "./Image";

export default function Time({time, type, colonQty, numberLength}) {
    const countTime = time.toString().split('');

    return (
        <View>
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={countTime}
                contentContainerStyle={{paddingVertical: 5}}
                renderItem={({item, index}) => (
                    <>
                        <ImageSvg key={item} image={item} colonQty={colonQty} numberLength={numberLength}/>
                        {type !== "seconds" && countTime.length - 1 === index ?
                            <Text style={{color: "white", fontSize: 250}}>:</Text>
                            : null
                        }
                    </>
                )}
            />
        </View>
    )
}

