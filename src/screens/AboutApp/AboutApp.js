import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

export default class AboutApp extends React.Component{
    render(){
        return (
            <View style={{backgroundColor: '#fff'}}>
                <ScrollView style={styles.pageContainer}>
                    <View style={styles.container}>
                        <Text style={styles.newsTitle}>Taxi CALL</Text>
                    </View>

                    <View style={styles.container}>
                        <Image source={require('../../../assets/splash1.png')} style={styles.newsPic} />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.newsContent}>Taxi CALL is made by the company of Ant.
                        To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.
                        By passing extraData=selected to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes.
                        keyExtractor tells the list to use the ids for the react keys instead of the default key property.
                        Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
                        This is a PureComponent which means that it will not re-render if props remain shallow-equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.
                        In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
                        By default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.</Text>
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