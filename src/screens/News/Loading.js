/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Loading extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color : '#bababa',
        backgroundColor : '#ffffff',
        fontSize : 12,
    }
});