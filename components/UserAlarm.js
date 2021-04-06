import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserAlarm = props => {
    console.log(props.time.item.hour);

    return (
        <View>
            <Text>{props.time.item.hour}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default UserAlarm;

