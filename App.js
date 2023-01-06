import React from 'react';
import {StatusBar} from "react-native";
import {StyleSheet, View} from 'react-native';
import ImageSvg from "./components/Image";
import {SafeAreaView, SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets } from "react-native-safe-area-context";

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
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <View style={styles.container}>
                    <SafeAreaView>
                        <StatusBar hidden={true}/>
                        <ImageSvg image={hours}/>
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: "flex-start"
    }
});
