import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is Settings Screen
            </Text>
        </View>
    );
};

SettingScreen.navigationOptions = naveData => {
    return {
        headerTitle: '설정'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingScreen;