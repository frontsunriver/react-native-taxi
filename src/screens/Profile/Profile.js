import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

export default class Profile extends React.Component{
    render(){
        return (
            <View style={{backgroundColor: '#fff'}}>
                <ScrollView style={styles.pageContainer}>
                    

                    <View style={styles.container}>
                        <Image source={require('../../../assets/icons/user.png')} style={styles.newsPic} />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.newsTitle}>Andrei Kazacov</Text>
                    </View>

                    <View style={styles.profile_container}>
                        <Text style={styles.label}>Email:</Text>
                        <Text>taxicall@support.com</Text>
                    </View>
                    <View style={styles.profile_container}>
                        <Text style={styles.label}>Address:</Text>
                        <Text>Anton dev collage Street</Text>
                    </View>
                    <View style={styles.profile_container}>
                        <Text style={styles.label}>Code:</Text>
                        <Text>4321234</Text>
                    </View>
                    <View style={styles.profile_container}>
                        <Text style={styles.label}>Phone:</Text>
                        <Text>+7XXXXXXXXX</Text>
                    </View>
                    <View style={styles.profile_container}>
                        <Text style={styles.label}>Type:</Text>
                        <Text>Client</Text>
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

    profile_container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 50,
        paddingRight: 50,
    },

    label: {
        color: '#949494',
        padding: 5,
        fontSize: 15

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