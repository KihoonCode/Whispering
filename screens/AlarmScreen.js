import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CurrentTime from '../components/CurrentTime';
import UserAlarmList from '../components/UserAlarmList';

const AlarmScreen = props => {

    let tempAlarmList = [
        { hour: 10, min: 30, pmAm: "pm" },
        { hour: 11, min: 20, pmAm: "am"}];

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