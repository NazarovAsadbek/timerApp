import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

/*

[o] 1. Сделть верстку таймера на главной странице
[o] 2. Сделть таймер интерактивным на главной странице
[o] 3. Сделть таймер интерактивным на главной странице

*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.timer();
        }, 1000)
    }

    componentDidUpdate() {
        if (this.state.hours > 24) {
            clearInterval(this.interval);
            this.setState({
                hours: 0,
                minutes: 0,
                seconds: 0
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer() {
        const {hours, minutes, seconds} = this.state;
        if (seconds < 59) {
            this.setState({
                seconds: seconds + 1
            })
        } else if (minutes < 59) {
            this.setState({
                minutes: minutes + 1,
                seconds: 0
            })
        } else {
            this.setState({
                hours: hours + 1,
                minutes: 0,
                seconds: 0
            })
        }
    }

    render() {
        const {hours, minutes, seconds} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.rotate}>
                    {hours > 0 && <View style={styles.row}>
                        <Text style={styles.text}> {hours} </Text>
                    </View>}
                    <View style={styles.row}>
                        <Text style={styles.text}> {minutes} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}> {seconds} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#000000"
    },
    rotate: {
        flexDirection: "row",
        transform: [{rotate: '90deg'}]
    },
    row: {
        flexDirection: "row",
    },
    text: {
        color: "#ffffff",
        fontSize: 300,
        textAlign: "center",
        letterSpacing: -50,
    }
});
