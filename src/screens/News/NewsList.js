/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';
import React from "react";
import { Image,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator } from "react-native";

import NewsDetail from './NewsDetail';
import LoadingView from './Loading';

export default class NewsList extends React.Component{
    constructor(){
        super();
        this.state = {
            dataSource: [
                {
                    text: 'text',
                    name: 'android'
                }
            ]
        }
        this.renderNews = this.renderNews.bind(this);
    }
   

    renderNews(){
        return (
            <TouchableOpacity onPress={() => this.onPressNews()}>
                <View style={styles.pageContainer}>
                    <View style={[styles.container, styles.newsItemContainer]}>
                        <Image 
                        source={require('../../../assets/images/news/news_pic.jpg')}
                        style={styles.newsPic} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.newsTitle}>Hi How are you Are you having a good day?</Text>
                            <Text style={styles.newsSummary}>My name is Andorid. I am not Robot So please understand me Hey Is the best App and dont' worry</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    onPressNews(){
        this.props.navigator.push({
            title: "News Detail",
            component: NewsDetail,
            passProps: {news},
        });
    }

    render(){
        return (
            <FlatList 
                data = {this.state.dataSource}
                renderItem={this.renderNews}
                style={styles.listView} />
        );
    }

    
}
const styles = StyleSheet.create({
    pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        backgroundColor: '#ffffff',
    },
    newsPic : {
        width : 90,
        height : 60,
        margin: 10,
        marginLeft: 0,
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#bababa',
        fontSize : 14,
        textAlign : 'left',
    },
});

module.exports = NewsList;

