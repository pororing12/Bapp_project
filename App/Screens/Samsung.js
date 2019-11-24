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

export default class Samsung extends Component {
    render() {
        return (
            <ScrollView>
                <View  >
                    <Image source={require("../../assets/scenery-1214950_1920.jpg")}
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
                            [영등포] 63 빌딩 입장권
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
                            }}> 30Lil</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 10,
                            borderBottomColor: "#bbb",
                            borderBottomWidth: 1
                        }}>

                    </View>

                </View>

            </ScrollView>



        )
    }
}