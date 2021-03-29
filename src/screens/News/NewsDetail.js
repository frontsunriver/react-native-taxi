import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

export default class NewsDetail extends React.Component{
    render(){
        return (
            <View style={{backgroundColor: '#fff'}}>
                <ScrollView style={styles.pageContainer}>
                    <View style={styles.container}>
                        <Text style={styles.newsTitle}>Guys Playing is now Date</Text>
                    </View>

                    <View style={styles.container}>
                        <Image source={require('../../../assets/images/news/news_pic.jpg')} style={styles.newsPic} />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.newsContent}>You will need a development environment running Node.js; this tutorial was tested on Node.js</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    pageContainer: {
        
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 18,
        textAlign : 'left',
        marginTop : 10,
        marginBottom : 10,
        fontWeight : 'bold'
    },
    newsPic : {
        width : 180,
        height : 120,
        margin: 10,
    },
    newsContent : {
        margin : 10,
        marginTop : 10,
        flex: 1,
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
        writingDirection : 'ltr',
        lineHeight : 20
    },
});