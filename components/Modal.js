import React from "react";
import {Modal, Pressable, StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Dialog({isVisible, onPress, isStarted}) {
    return (
        <Modal animationType="fade" transparent={false} visible={isVisible}>
            <View style={styles.container}>
                <View style={styles.dialog}>
                    <Pressable style={styles.button} onPress={onPress}>
                        <FontAwesome name={isStarted ? "pause" : "play"} size={24} color="black"/>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 24,
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'white',
    },
});
