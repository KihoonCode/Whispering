import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const UserAlarm = props => {
    const [isOn, setIsOn] = useState(true);

    /*
    <MaterialIcons
        name='alarm-off'
        size={45}
        color='#008000'
    />
    */

    return (
        <View style={styles.container}>
            <View style={styles.onOffContainer}>
                <MaterialIcons
                    name='alarm-on'
                    size={45}
                    color='#008000'
                />
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>
                    {props.time.item.hour + '시 ' + props.time.item.min + '분 ' +
                        props.time.item.pmAm}
                </Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.remainingTimeContainer}>
                    <Text>남은시간:</Text>
                    <Text>{props.time.item.remainingTime}</Text>
                </View>
                <MaterialIcons
                    name='menu'
                    size={30}
                    color='black'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: '4%',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '3%'
    },
    onOffContainer: {
        marginRight: '3%'
    },
    timeContainer: {
        width: '40%',
    },
    timeText: {
        fontSize: 20
    },
    detailContainer: {
        marginLeft: '5%',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    remainingTimeContainer: {
        marginHorizontal: '3%'
    }
});

export default UserAlarm;

