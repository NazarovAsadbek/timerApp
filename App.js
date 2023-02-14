import React from 'react';
import {StatusBar, View, Pressable} from "react-native";
import {SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets} from "react-native-safe-area-context";
import Time from "./components/Time";
import Dialog from "./components/modals/Modal";
import SettingsDialog from "./components/modals/Settings";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: "0",
            minutes: "0",
            seconds: "00",
            isStarted: true,
            isModalVisible: false,
            isSettingsModalVisible: false
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
                hours: "0", minutes: "0", seconds: "00"
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
                minutes: +minutes + 1, seconds: "00"
            })
        } else {
            this.setState({
                hours: +hours + 1, minutes: "00", seconds: "00"
            })
        }
    }

    openModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
        if (!this.state.isModalVisible) {
            this.autoCloseModal();
        } else {
            clearInterval(this.modalTimeout);
        }
    }

    openSettingsModal = () => {
        this.setState({isSettingsModalVisible: !this.state.isSettingsModalVisible});
        if (!this.state.isSettingsModalVisible) {
            clearInterval(this.modalSettingsTimeout);
        } else {
            this.autoCloseSettingsModal();
        }
    }

    autoCloseModal() {
        this.modalTimeout = setTimeout(() => {
            this.setState({isModalVisible: false});
            clearTimeout(this.modalTimeout);
        }, 1250);
    }

    autoCloseSettingsModal() {
        this.modalSettingsTimeout = setTimeout(() => {
            this.setState({isSettingsModalVisible: false});
            clearTimeout(this.modalSettingsTimeout);
        }, 2000);
    }

    startStopTimer = () => {
        if (this.state.isModalVisible) {
            this.setState({isModalVisible: true});
            clearTimeout(this.modalTimeout);
            this.autoCloseModal();
        }
        this.state.isStarted ? clearInterval(this.interval) : this.interval = setInterval(() => {
            this.timer();
        }, 1000);
        this.setState({isStarted: !this.state.isStarted});
    }

    restartTimer = () => {
        if (this.state.isSettingsModalVisible) {
            this.setState({isSettingsModalVisible: true});
            clearTimeout(this.modalSettingsTimeout);
            this.autoCloseSettingsModal();
        }
        clearInterval(this.interval);
        this.setState({
            hours: "0", minutes: "0", seconds: "00"
        })
        this.interval = setInterval(() => {
            this.timer();
        }, 1000)
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
        const {hours, minutes, seconds, isStarted, isModalVisible, isSettingsModalVisible} = this.state;
        const colonQty = +hours === 0 ? 1 : 2;
        const numberLength = this.countElementsLengthInTime();

        return (<SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar hidden={true} backgroundColor={'transparent'} translucent/>
            {isModalVisible ?
                <Dialog isVisible={isModalVisible} onPress={this.startStopTimer} onPressModal={this.openModal}
                        isStarted={isStarted}/> : null}
            {isSettingsModalVisible ?
                <SettingsDialog isVisible={isSettingsModalVisible} onPress={this.restartTimer}
                                onPressModal={this.openSettingsModal}/> : null}
            <Pressable style={{flex: 1}}
                       onPress={this.openModal} onLongPress={this.openSettingsModal}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    {+hours > 0 ?
                        <Time type="hours" time={hours} colonQty={colonQty} numberLength={numberLength}/> : null}
                    <Time type="minutes" time={minutes} colonQty={colonQty} numberLength={numberLength}/>
                    <Time type="seconds" time={seconds} colonQty={colonQty} numberLength={numberLength}/>
                </View>
            </Pressable>
        </SafeAreaProvider>)
    }
}
