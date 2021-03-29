import React from "react";
import { View, Text, TouchableNativeFeedback, ScrollView, Image } from "react-native";

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.goDetailAction = this.goDetailAction.bind(this);
    }

    goDetailAction(e){
        // console.log(this.props);
        this.props.navigation.navigate('NewsDetail');
        // this.props.navigation.navigate('HistoryDetail');
    }

    render(){
        return(
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <TouchableNativeFeedback onPress={this.goDetailAction}>
                        <View style={{borderBottomWidth: 1,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'solid',
                                backgroundColor: '#fff'}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                padding: 3,
                            }}>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../assets/images/news/news_pic.jpg')} style={{width: 80, height: 80}}></Image>
                                </View>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                            }}>
                                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ flex: 1, color: '#7D7E7C', fontSize: 20, paddingBottom: 5}}>Guys Playing is now Date</Text>
                                        <Text style={{flex: 1, fontSize: 10, textAlign:'left', paddingLeft: 20, color: '#F53C17'}}>2021-03-03</Text>
                                    </View>
                                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ flex: 1, color: '#484947', fontSize: 14, paddingTop: 5, paddingRight: 3}}>You will need a development environment running Node.js; this tutorial was tested on Node.js </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                  
                </View>
            </ScrollView>
            
            
        )
    }
}