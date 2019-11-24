import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default class FeedScreen extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Feather
                name="layout"
                color={tintColor}
                size={32}
                style={{
                    alignItems: "center"
                }} />
        )
    }
    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        marginTop: 70,
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                    <TouchableOpacity
                        style={{
                            flxe: 1,

                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 2,
                            borderRadius: 10,
                            marginBottom: 20,


                        }}>

                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#bbb",

                            }}>
                            <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    width: SCREEN_WIDTH / 16,
                                    height: SCREEN_HEIGHT / 30,
                                    borderRadius: 10,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 10,

                                }}
                            />

                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            >
                                Pororing
                        </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F8F8F8",
                                    width: 68,
                                    height: 32,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "42%",
                                    marginTop: 15,

                                }}
                            >
                                <Image
                                    source={
                                        require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")
                                    }
                                    style={{
                                        resizeMode: "contain",
                                        width: 23,
                                        height: 23,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#7C7C7C",
                                        fontWeight: "400"
                                    }}
                                >
                                    대구
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                marginTop: -10

                            }}
                        >
                            <Image source={require("../../assets/south-korea-3616701_1920.jpg")}
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT / 3,
                                    width: SCREEN_WIDTH / 1.121,
                                }}
                            />

                            <View
                                style={{
                                    marginTop: "5%",
                                    borderBottomWidth: 0.3,
                                    borderBottomColor: "#bbb",
                                    flexDirection: "row"
                                }}>



                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flxe: 1,

                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 4,
                            borderRadius: 10,
                            marginBottom: 20,


                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#bbb",

                            }}>
                            <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    width: SCREEN_WIDTH / 16,
                                    height: SCREEN_HEIGHT / 30,
                                    borderRadius: 10,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 10,

                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            >
                                cake
                        </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F8F8F8",
                                    width: 68,
                                    height: 32,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "48%",
                                    marginTop: 15
                                }}
                            >
                                <Image
                                    source={
                                        require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")
                                    }
                                    style={{
                                        resizeMode: "contain",
                                        width: 23,
                                        height: 23,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#7C7C7C",
                                        fontWeight: "400"
                                    }}
                                >
                                    서울
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                marginLeft: "5%"
                            }}>
                            <Image source={require("../../assets/550px-Seoul_Tower_-_panoramio_(1).jpg")}
                                style={{
                                    resizeMode: "cover",
                                    height: SCREEN_HEIGHT / 8,
                                    width: SCREEN_WIDTH / 4,
                                    borderRadius: 15,



                                }}
                            />
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity
                        style={{
                            flxe: 1,

                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 4,
                            borderRadius: 10,
                            marginBottom: 20,


                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#bbb",

                            }}>
                            <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    width: SCREEN_WIDTH / 16,
                                    height: SCREEN_HEIGHT / 30,
                                    borderRadius: 10,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 10,

                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            >
                                pizza
                        </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F8F8F8",
                                    width: 68,
                                    height: 32,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "47%",
                                    marginTop: 15
                                }}
                            >
                                <Image
                                    source={
                                        require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")
                                    }
                                    style={{
                                        resizeMode: "contain",
                                        width: 23,
                                        height: 23,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#7C7C7C",
                                        fontWeight: "400"
                                    }}
                                >
                                    부산
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                marginLeft: "5%"
                            }}>
                            <Image source={require("../../assets/haeundae-beach-1987193_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    height: SCREEN_HEIGHT / 8,
                                    width: SCREEN_WIDTH / 4,
                                    borderRadius: 15,



                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flxe: 1,

                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 4,
                            borderRadius: 10,
                            marginBottom: 20,


                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#bbb",

                            }}>
                            <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    width: SCREEN_WIDTH / 16,
                                    height: SCREEN_HEIGHT / 30,
                                    borderRadius: 10,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 10,

                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            >
                                Pororing
                        </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F8F8F8",
                                    width: 68,
                                    height: 32,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "40%",
                                    marginTop: 15
                                }}
                            >
                                <Image
                                    source={
                                        require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")
                                    }
                                    style={{
                                        resizeMode: "contain",
                                        width: 23,
                                        height: 23,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#7C7C7C",
                                        fontWeight: "400"
                                    }}
                                >
                                    경주
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                marginLeft: "5%"
                            }}>
                            <Image source={require("../../assets/sunset-3664096_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    height: SCREEN_HEIGHT / 8,
                                    width: SCREEN_WIDTH / 4,
                                    borderRadius: 15,



                                }}
                            />
                        </View>
                    </TouchableOpacity>



                </View>
            </ScrollView>
        )
    }
}