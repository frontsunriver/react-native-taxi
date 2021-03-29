import React from "react";
import { View, Text, TouchableNativeFeedback, ScrollView, Image } from "react-native";

export default class History extends React.Component{
    constructor(props){
        super(props);
        this.goDetailAction = this.goDetailAction.bind(this);
    }

    goDetailAction(e){
        // console.log(this.props);
        this.props.navigation.navigate('HistoryDetail');
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
                        <View style={{borderBottomWidth: 5,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'dashed'}}>
                            <Text style={{color: '#777', textAlign: 'center', paddingTop: 5}}>2021-03-03 11:30:15</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                
                            }}>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                paddingLeft: 30
                                            }}>
                                    <Text style={{color: '#555', fontSize: 20, paddingBottom: 5}}>Street 1</Text>
                                    <Text style={{color: '#555', fontSize: 20, paddingTop: 5}}>Street 2</Text>
                                </View>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../../assets/icons/right_arrow.png')} style={{width: 30, height: 30, opacity: 0.2}}></Image>
                                </View>
                                
                            </View>
                            <Text style={{textAlign:'right',
                                                paddingRight: 50,
                                                marginBottom: 10
                                            }}>11000cyM</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => {alert('1')}}>
                        <View style={{borderBottomWidth: 5,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'dashed'}}>
                            <Text style={{color: '#777', textAlign: 'center', paddingTop: 5}}>2021-03-03 11:30:15</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                
                            }}>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                paddingLeft: 30
                                            }}>
                                    <Text style={{color: '#555', fontSize: 20, paddingBottom: 5}}>Street 1</Text>
                                    <Text style={{color: '#555', fontSize: 20, paddingTop: 5}}>Street 2</Text>
                                </View>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../../assets/icons/right_arrow.png')} style={{width: 30, height: 30, opacity: 0.2}}></Image>
                                </View>
                                
                            </View>
                            <Text style={{textAlign:'right',
                                                paddingRight: 50,
                                                marginBottom: 10
                                            }}>11000cyM</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => {alert('1')}}>
                        <View style={{borderBottomWidth: 5,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'dashed'}}>
                            <Text style={{color: '#777', textAlign: 'center', paddingTop: 5}}>2021-03-03 11:30:15</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                
                            }}>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                paddingLeft: 30
                                            }}>
                                    <Text style={{color: '#555', fontSize: 20, paddingBottom: 5}}>Street 1</Text>
                                    <Text style={{color: '#555', fontSize: 20, paddingTop: 5}}>Street 2</Text>
                                </View>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../../assets/icons/right_arrow.png')} style={{width: 30, height: 30, opacity: 0.2}}></Image>
                                </View>
                                
                            </View>
                            <Text style={{textAlign:'right',
                                                paddingRight: 50,
                                                marginBottom: 10
                                            }}>11000cyM</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => {alert('1')}}>
                        <View style={{borderBottomWidth: 5,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'dashed'}}>
                            <Text style={{color: '#777', textAlign: 'center', paddingTop: 5}}>2021-03-03 11:30:15</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                
                            }}>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                paddingLeft: 30
                                            }}>
                                    <Text style={{color: '#555', fontSize: 20, paddingBottom: 5}}>Street 1</Text>
                                    <Text style={{color: '#555', fontSize: 20, paddingTop: 5}}>Street 2</Text>
                                </View>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../../assets/icons/right_arrow.png')} style={{width: 30, height: 30, opacity: 0.2}}></Image>
                                </View>
                                
                            </View>
                            <Text style={{textAlign:'right',
                                                paddingRight: 50,
                                                marginBottom: 10
                                            }}>11000cyM</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => {alert('1')}}>
                        <View style={{borderBottomWidth: 5,
                                borderBottomColor: '#e2e2e2',
                                borderStyle: 'dashed'}}>
                            <Text style={{color: '#777', textAlign: 'center', paddingTop: 5}}>2021-03-03 11:30:15</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                
                            }}>
                                <View style={{flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                paddingLeft: 30
                                            }}>
                                    <Text style={{color: '#555', fontSize: 20, paddingBottom: 5}}>Street 1</Text>
                                    <Text style={{color: '#555', fontSize: 20, paddingTop: 5}}>Street 2</Text>
                                </View>
                                <View style={{paddingRight: 10, color: '#e2e2e2'}}>
                                    <Image source={require('../../../../assets/icons/right_arrow.png')} style={{width: 30, height: 30, opacity: 0.2}}></Image>
                                </View>
                                
                            </View>
                            <Text style={{textAlign:'right',
                                                paddingRight: 50,
                                                marginBottom: 10
                                            }}>11000cyM</Text>
                        </View>
                    </TouchableNativeFeedback>
                    
                </View>
            </ScrollView>
            
            
        )
    }
}