import React from 'react';
import {StatusBar, View} from "react-native";
import {SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets} from "react-native-safe-area-context";
import Time from "./components/Time";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: "0",
            minutes: "0",
            seconds: "00",
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
                hours: "0",
                minutes: "0",
                seconds: "00"
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer() {
        const {hours, minutes, seconds} = this.state;
        if (+seconds < 59) {
            if (+seconds < 9) {
                this.setState({
                    seconds: "0" + (+seconds + 1)
                })
            } else {
                this.setState({
                    seconds: +seconds + 1
                })
            }
        } else if (+minutes < 59) {
            this.setState({
                minutes: +minutes + 1,
                seconds: "00"
            })
        } else {
            this.setState({
                hours: +hours + 1,
                minutes: "00",
                seconds: "00"
            })
        }
    }

    countElementsLengthInTime() {
        const {hours, minutes, seconds} = this.state;
        if (+hours === 0) {
            return minutes.toString().split('').length + seconds.toString().split('').length;
        } else {
            return hours.toString().split('').length + minutes.toString().split('').length + seconds.toString().split('').length;
        }
    }

    render() {
        const {hours, minutes, seconds} = this.state;
        const colonQty = +hours === 0 ? 1 : 2;
        const numberLength = this.countElementsLengthInTime();

        return (
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <StatusBar hidden={true}/>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    {+hours > 0 ? <Time type="hours" time={hours} colonQty={colonQty} numberLength={numberLength}/> : null}
                    <Time type="minutes" time={minutes} colonQty={colonQty} numberLength={numberLength}/>
                    <Time type="seconds" time={seconds} colonQty={colonQty} numberLength={numberLength}/>
                </View>
            </SafeAreaProvider>
        )
    }
}
