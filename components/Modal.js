import React from "react";
import {Modal, Pressable, StatusBar, StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets} from "react-native-safe-area-context";
import Time from "./Time";

export default function Dialog({isVisible, onPress, isStarted, onPressModal}) {
    return (
        <Modal style={{flex: 1}} animationType="fade" transparent={true} visible={isVisible} statusBarTranslucent>
            <StatusBar hidden={true} backgroundColor={'transparent'} translucent/>
            <Pressable style={styles.container} onPress={onPressModal}>
                <View style={styles.dialog}>
                    <Pressable style={styles.button} onPress={onPress}>
                        <FontAwesome name={isStarted ? "pause" : "play"} size={36} color="white"/>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }, dialog: {
        width: '10%',
    }, button: {
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "white",
        backgroundColor: 'black',
    },
});
