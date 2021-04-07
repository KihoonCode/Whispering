import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CurrentTime from '../components/CurrentTime';
import UserAlarmList from '../components/UserAlarmList';

const AlarmScreen = props => {

    let tempAlarmList = [
        { hour: 10, min: 30, pmAm: "AM", remainingTime: "11:22:31" },
        { hour: 12, min: 20, pmAm: "PM", remainingTime: "03:22:11"},
        { hour: '03', min: 43, pmAm: "AM", remainingTime: "02:05:35"},
        { hour: '07', min: 12, pmAm: "AM", remainingTime: "09:25:56"},
        { hour: 10, min: 30, pmAm: "AM", remainingTime: "11:22:31" },
        { hour: 12, min: 20, pmAm: "PM", remainingTime: "03:22:11"},
        { hour: '03', min: 43, pmAm: "AM", remainingTime: "02:05:35"},
        { hour: '07', min: 12, pmAm: "AM", remainingTime: "09:25:56"}];

    return (
        <View style={styles.screen}>
            <CurrentTime />
            <UserAlarmList data={tempAlarmList}/>
        </View>
    );
};

AlarmScreen.navigationOptions = navData => {
    return {
        headerTitle: '위스퍼링'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

export default AlarmScreen;