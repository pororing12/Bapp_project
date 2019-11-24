import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, Platform, SafeAreaView, Dimensions, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default class StoreScreen extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="store" color={tintColor} size={32} style={{
                alignItems: "center"
            }} />
        )
    }
    render() {
        return (

            <ScrollView
                style={{
                    marginTop: 100
                }}>

                <View
                    style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        marginTop: 20,
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Store1")}>
                        <Image source={require("../../assets/fried-chicken-690039_1920.jpg")}
                            style={{

                                resizeMode: "cover",
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 5,
                                marginRight: 20
                            }} />
                        <View
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowOpacity: 0.8,
                                elevation: 3,
                                shadowRadius: 10,
                                backgroundColor: "#FFFFFF",
                                shadowOffset: { width: 1, height: 13 },
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 10,
                                justifyContent: "center"
                            }}>
                            <Text
                                style={{
                                    fontWeight: "800",
                                    marginLeft: 20,
                                    marginTop: 0

                                }}>
                                치맥페스티벌

                                치킨교환권
                        </Text>
                            <View
                                style={{ flexDirection: "row" }}>
                                <Image
                                    source={
                                        require("../../assets/Slice.png")
                                    }
                                    style={{
                                        resizeMode: "cover",
                                        marginLeft: 15,

                                        width: 40,
                                        height: 40
                                    }}
                                />
                                <Text style={{
                                    marginTop: 10
                                }}>
                                    30 lil

                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Store2")}>
                        <Image source={require("../../assets../../assets/south-korea-3648252_1280.jpg")}
                            style={{

                                resizeMode: "cover",
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 5
                            }} />
                        <View
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowOpacity: 0.8,
                                elevation: 3,
                                shadowRadius: 10,
                                backgroundColor: "#FFFFFF",
                                shadowOffset: { width: 1, height: 13 },
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 10,
                                justifyContent: "center"
                            }}>
                            <Text
                                style={{
                                    fontWeight: "800",
                                    marginLeft: 20,
                                    marginTop: 0

                                }}>
                                우방타워랜드 입장권
                        </Text>
                            <View
                                style={{ flexDirection: "row" }}>
                                <Image
                                    source={
                                        require("../../assets/Slice.png")
                                    }
                                    style={{
                                        resizeMode: "cover",
                                        marginLeft: 15,

                                        width: 40,
                                        height: 40
                                    }}
                                />
                                <Text style={{
                                    marginTop: 10
                                }}>
                                    20 lil

                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        marginTop: 20,
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Store3")}>
                        <Image source={require("../../assets/african-lion-951778_1920.jpg")}
                            style={{

                                resizeMode: "stretch",
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 5,
                                marginRight: 20
                            }} />
                        <View
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowOpacity: 0.8,
                                elevation: 3,
                                shadowRadius: 10,
                                backgroundColor: "#FFFFFF",
                                shadowOffset: { width: 1, height: 13 },
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 10,
                                justifyContent: "center"
                            }}>
                            <Text
                                style={{
                                    fontWeight: "800",
                                    marginLeft: 20,
                                    marginTop: 0

                                }}>
                                달성공원 입장권
                        </Text>
                            <View
                                style={{ flexDirection: "row" }}>
                                <Image
                                    source={
                                        require("../../assets/Slice.png")
                                    }
                                    style={{
                                        resizeMode: "cover",
                                        marginLeft: 15,

                                        width: 40,
                                        height: 40
                                    }}
                                />
                                <Text style={{
                                    marginTop: 10
                                }}>
                                    5 lil

                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Store4")}>
                        <Image source={require("../../assets/Ih6rppyuxCOQqevGI0nBrGWxWuKs.jpg")}
                            style={{

                                resizeMode: "stretch",
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 5,
                            }} />
                        <View
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowOpacity: 0.8,
                                elevation: 3,
                                shadowRadius: 10,
                                backgroundColor: "#FFFFFF",
                                shadowOffset: { width: 1, height: 13 },
                                width: SCREEN_WIDTH / 2.5,
                                height: SCREEN_HEIGHT / 10,
                                justifyContent: "center"
                            }}>
                            <Text
                                style={{
                                    fontWeight: "800",
                                    marginLeft: 20,
                                    marginTop: 0

                                }}>
                                삼성 미술관 입장권
                        </Text>
                            <View
                                style={{ flexDirection: "row" }}>
                                <Image
                                    source={
                                        require("../../assets/Slice.png")
                                    }
                                    style={{
                                        resizeMode: "cover",
                                        marginLeft: 15,

                                        width: 40,
                                        height: 40
                                    }}
                                />
                                <Text style={{
                                    marginTop: 10
                                }}>
                                    10 lil

                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>




                </View>
            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginTop: 30
    }
})