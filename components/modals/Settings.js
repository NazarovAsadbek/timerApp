import React from "react";
import {Modal, Pressable, StatusBar, StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Dialog({isVisible, onPress, onPressModal}) {
    return (
        <Modal style={{flex: 1}} animationType="fade" transparent={true} visible={isVisible} statusBarTranslucent>
            <StatusBar hidden={true} backgroundColor={'transparent'} translucent/>
            <Pressable style={styles.container} onPress={onPressModal}>
                <View style={styles.dialog}>
                    <Pressable style={styles.button} onPress={onPress}>
                        <FontAwesome name="refresh" size={36} color="white"/>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    dialog: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 90,
        height: 90,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "white",
        backgroundColor: 'black',
    },
});
