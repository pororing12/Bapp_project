import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StatusBar,
    TextInput
} from "react-native";

import { ListItem } from 'react-native-elements'
import axios from 'axios'
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'




const { width, height } = Dimensions.get("window");

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width - 25;



export default class FundiGo1 extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            location: "",
            gps: ""
        }
    }

    _userUpload = (text) => {
        this.setState({
            user: text,
        })
    }

    _locationUpload = (text) => {
        this.setState({
            location: text,
        })
    }

    _gpsUpload = (text) => {
        this.setState({
            gps: text,
        })
    }

    _start = async () => {
        await axios.post('http://35.223.204.78:8880/saveEveryList', {
            "USER": `${this.state.user}`,
            "LOCATION": `${this.state.location}`,
            "GPS": `${this.state.gps}`
        })
            .then(res => {
                console.log(res.data)
                return res.data;
            })
        return this.props.navigation.navigate("FundiGo1")
    }


    render() {

        return (
            <View>
                <SafeAreaView />

                <View
                    style={{
                        marginBottom: 30
                    }}>
                </View>
                <View
                    style={{
                        marginBottom: 30
                    }}>
                    <TextInput
                        style={{
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: "black",
                            width: SCREEN_WIDTH / 1.1,
                            height: SCREEN_HEIGHT / 14,
                            color: "#bbb",
                            marginBottom: 20,
                        }}
                        placeholder="  지역을 입력하세요"
                        placeholderTextColor="#bbb"
                        onChangeText={this._locationUpload}>
                    </TextInput>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 50
                    }}>
                </View>
                <View
                    style={{
                        marginTop: 50
                    }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            flxe: 1,
                            marginLeft: 30,
                            marginTop: 100,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#56D1F3",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 12,
                            borderRadius: 10,
                            marginBottom: 20,
                            alignItems: "center",
                            justifyContent: "center"


                        }}
                        onPress={this._start.bind(this)}>

                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "700",
                                color: "white"

                            }}>
                            등록하기
                </Text>
                    </TouchableOpacity>
                </View>




            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        borderWidth: 3,
        borderColor: "#56D1F3",
        borderRadius: 15,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontWeight: "700",


    },
});

