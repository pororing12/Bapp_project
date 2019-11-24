import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { Rating } from 'react-native-elements';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default class Store1Screen extends Component {
    render() {
        return (
            <ScrollView>
                <View  >
                    <Image source={require("../../assets/fried-chicken-690039_1920.jpg")}
                        style={{
                            resizeMode: "stretch",
                            width: SCREEN_WIDTH,
                            height: SCREEN_HEIGHT / 2
                        }}

                    />
                    <View
                        style={{
                            marginLeft: 30,
                            marginTop: 30

                        }}>
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: 15
                            }}>
                            [대구] 치맥페스티벌 치킨교환권
                    </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 50,
                            marginLeft: 30,
                            flexDirection: "row",
                        }}>
                        <Image source={require("../../assets/Slice.png")}
                            style={{
                                resizeMode: "stretch",
                                width: 45,
                                height: 45
                            }}
                        />
                        <Text
                            style={{
                                marginTop: 13,
                                fontWeight: "600",
                                fontSize: 20
                            }}> 30 lil</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 10,
                            borderBottomColor: "#bbb",
                            borderBottomWidth: 1
                        }}>

                    </View>

                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{
                        flxe: 1,
                        marginLeft: 20,
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


                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "700",
                            color: "white"

                        }}>
                        구매하기
                        </Text>
                </TouchableOpacity>

            </ScrollView>



        )
    }
}