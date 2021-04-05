import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CurrentTime from '../components/CurrentTime';
import UserAlarmList from '../components/UserAlarmList';

const AlarmScreen = props => {

    const tempAlarmList = [{ time: 1122 }];

    return (
        <View style={styles.screen}>
            <CurrentTime />
            <UserAlarmList />
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