import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, SafeAreaView, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default class SearchList extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView
                style={
                    styles.AndroidSafeArea
                }>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            marginBottom: 40,
                            alignItems: "center",
                            flexDirection: "row"
                        }}>

                        <TextInput
                            placeholder="     검색할 도시를 입력하세요."
                            style={{
                                fontSize: 20,
                            }}
                        >
                        </TextInput>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            marginLeft: 30,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: "#1A43AF"
                            }}
                        >
                            한국
                </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginLeft: 30
                        }}>
                        <TouchableOpacity
                            onPress={
                                () => this.props.navigation.navigate("Seoul")
                            }
                        >
                            <Image
                                source={
                                    require("../../assets/Seoul.png")
                                }
                                style={{
                                    resizeMode: "stretch",
                                    width: 170,
                                    height: 170,
                                    marginRight: 20
                                }}
                            >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Gyeongju")}>
                            <Image
                                source={
                                    require("../../assets/gyeongju.png")
                                }
                                style={{
                                    resizeMode: "stretch",
                                    width: 170,
                                    height: 170
                                }}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: "#1A43AF"
                            }}
                        >
                            동남아시아
                </Text>
                    </View>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginLeft: 30
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Malaysia")}>
                                <Image
                                    source={
                                        require("../../assets/malaysia.png")
                                    }
                                    style={{
                                        resizeMode: "stretch",
                                        width: 170,
                                        height: 170,
                                        marginRight: 10
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Laos")}>
                                <Image
                                    source={
                                        require("../../assets/LAOS.png")
                                    }
                                    style={{
                                        resizeMode: "stretch",
                                        width: 170,
                                        height: 170,
                                        marginRight: 20
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Cambodia")}>
                                <Image
                                    source={
                                        require("../../assets/Cambodia.png")
                                    }
                                    style={{
                                        resizeMode: "stretch",
                                        width: 170,
                                        height: 170,
                                        marginRight: 20
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Singapore")}>
                                <Image
                                    source={
                                        require("../../assets/Singapore.png")
                                    }
                                    style={{
                                        resizeMode: "stretch",
                                        width: 170,
                                        height: 170,
                                        marginRight: 20
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>


                </ScrollView>
            </SafeAreaView>

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