import React from 'react';
import {Dimensions, FlatList, StatusBar, Text, View} from "react-native";
import {SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets} from "react-native-safe-area-context";
import Time from "./components/Time";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: "0",
            minutes: "0",
            seconds: "0",
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

    render() {
        {
            /*
               Если width / 6
               цифра = 128px;
               цифра + двоеточик = 188 px;
            */
            /*
               Если width / 3
               цифра = 230;
               цифра + двоеточик = 275 px;
            */
        }
        const {hours, minutes, seconds} = this.state;
        // const countHoursLength = +hours > 0 ? hours.toString().split('').length : 0;
        // const countMinutesLength = minutes.toString().split('').length;
        // const countSecondsLength = seconds.toString().split('').length;
        // const totalTimeLength = countHoursLength + countMinutesLength + countSecondsLength;
        // const {width, height} = Dimensions.get('window');
        // const secondsWidth = (width / totalTimeLength) * countSecondsLength;
        // const minutesWidth = (width / totalTimeLength) * countMinutesLength + 26;
        // console.log(secondsWidth, minutesWidth)
        return (
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <StatusBar hidden={true}/>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                    {+hours > 0 ? <Time type="hours" time={hours}/> : null}
                    <Time type="minutes" time={minutes}/>
                    <Time type="seconds" time={seconds}/>
                </View>
            </SafeAreaProvider>
        )
    }
}
