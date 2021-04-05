import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

const CurrentTime = props => {
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <View>
                    <Text style={styles.timeText}>2021년 4월 5일 월요일</Text>
                </View>
                <View>
                    <Text style={styles.timeText}>06:53:56 PM</Text>
                </View>
            </View>
            <View style={styles.dayAndNightContainer}>
                <Text style={styles.dayAndNightText}>
                    Night
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: '10%',
        marginHorizontal: '5%',
        padding: '4%',
        borderWidth: 1,
        borderRadius: 15,
        width: '85%'
    },
    timeContainer: {
        width: '70%'
    },
    timeText: {
        textAlign: 'center',
        fontSize: 15
    }, 
    dayAndNightContainer: {
        width: '30%'
    },
    dayAndNightText: {
        textAlign: 'center'
    }
});

export default CurrentTime;